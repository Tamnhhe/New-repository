// Hàm tạo chuỗi ngẫu nhiên từ danh sách từ vựng
function generateRandomString(length = 10, separator = " ") {
    const wordList = [
        "apple", "banana", "cherry", "dog", "elephant", "fish", "giraffe", "house", 
        "ice", "jungle", "kiwi", "lemon", "mountain", "orange", "piano", "queen", 
        // ... (danh sách từ vựng đầy đủ giống trong mã gốc)
    ];
    const result = [];
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * wordList.length);
        result.push(wordList[randomIndex]);
    }
    return result.join(separator);
}

// Hàm chờ và tìm phần tử DOM
async function waitForElement(selector, timeout = 10000) {
    const startTime = Date.now();
    while (!document.querySelector(selector)) {
        if (Date.now() - startTime > timeout) throw new Error(`Timeout waiting for ${selector}`);
        await new Promise(resolve => setTimeout(resolve, 100));
    }
    return document.querySelector(selector);
}

// Hàm kiểm tra URL hiện tại có chứa chuỗi không
function isUrlMatching(pattern) {
    return location.href.includes(pattern);
}
// Chức năng tự động hoàn thành tuần học (video & bài đọc)
async function autoCompleteWeek() {
    if (!isUrlMatching("/learn/")) {
        alert("This is not a course page, please go to your course page first");
        return;
    }
    try {
        await waitForElement('button[data-js="open-course-link"]', 1000).then(button => button.click());
        await new Promise(resolve => setTimeout(resolve, 1000));
        await waitForElement('button[data-js="open-course-link"]', 1000).then(button => button.click());
        
        let reviewCount;
        do {
            reviewCount = await waitForElement('td[data-testid="review-count"]', 1000)
                .then(element => element.innerText)
                .catch(() => null);
            await autoReviewAssignments();
        } while (reviewCount && reviewCount.includes("left to complete"));
    } catch (error) {
        console.error("Error in autoCompleteWeek:", error);
    }
}

// Chức năng tự động đánh giá bài tập peer review
async function autoReviewAssignments() {
    try {
        const reviewForm = await waitForElement(".rc-FormPart", 1000);
        const reviewSections = document.getElementsByClassName("rc-FormPart");
        const feedbackText = "Rush Coursera siêu tốc, IB zalo: 0868362951";

        for (const section of reviewSections) {
            // Chọn đáp án radio có điểm cao nhất
            const radioInputs = section.querySelectorAll(".peer-option-input input[type='radio']");
            const scores = Array.from(section.querySelectorAll(".option-contents > div:nth-child(1)"))
                .map(content => {
                    const number = content.textContent?.match(/\d+/) || [0];
                    return parseInt(number[0], 10);
                });

            if (radioInputs.length > 0 && scores.length === radioInputs.length) {
                const highestScoreIndex = scores.indexOf(Math.max(...scores));
                if (highestScoreIndex !== -1) {
                    radioInputs[highestScoreIndex].click();
                    radioInputs[highestScoreIndex].dispatchEvent(new Event("change", { bubbles: true }));
                }
            }

            // Điền phản hồi vào textarea
            const textAreas = section.querySelectorAll('.c-peer-review-submit-textarea-input-field, div[data-testid="peer-review-multi-line-input-field"]');
            for (const textArea of textAreas) {
                textArea.click();
                textArea.focus();
                document.execCommand("insertText", false, feedbackText);
            }
        }

        // Nhấn nút nộp
        setTimeout(() => {
            const submitButton = document.querySelector(".rc-FormSubmit button");
            submitButton.scrollIntoView();
            submitButton.click();
        }, 700);
    } catch (error) {
        console.error("Error in autoReviewAssignments:", error);
    }
}

// Chức năng tự động nộp bài tập peer review
async function autoSubmitPeerAssignment() {
    if (!isUrlMatching("/learn/")) {
        alert("This is not a course page, please go to your course page first");
        return;
    }
    if (!isUrlMatching("/peer/") || isUrlMatching("/give-feedback")) {
        const assignments = await fetchCourseAssignments();
        for (const assignment of assignments) {
            if (!assignment.completed && !assignment.locked && assignment.href.includes("/peer/") && !assignment.href.includes("/give-feedback")) {
                if (confirm("Go to assignment page?")) {
                    location.href = assignment.href;
                    return;
                }
            }
        }
    }

    try {
        // Chuyển đến tab thứ 2
        await waitForElement('div[role="tablist"] button:nth-child(2)').then(tab => tab.click());

        const randomText = generateRandomString(10);
        // Điền tiêu đề dự án
        await waitForElement('#main input[aria-label="Project Title"]', 20000).then(input => {
            input.click();
            input.value = randomText;
            input.dispatchEvent(new Event("change", { bubbles: true }));
        });

        // Điền các trường text và textarea
        document.querySelectorAll('#main input[type="text"]:not([aria-label="URL"]), textarea:not([aria-label="URL"])')
            .forEach(field => {
                field.value = randomText;
                field.dispatchEvent(new Event("change", { bubbles: true }));
            });

        // Tải file lên
        document.querySelectorAll(".rc-UppyFileUploader button").forEach(async button => {
            await button.click();
            const randomContent = generateRandomString(2000);
            const randomFileName = `${generateRandomString(4, "-")}.md`;
            const file = new File([randomContent], randomFileName, { type: "text/plain" });
            const fileInput = document.querySelector('.uppy-Dashboard-input[type="file"]');
            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(file);
            fileInput.files = dataTransfer.files;
            fileInput.dispatchEvent(new Event("change", { bubbles: true }));
        });

        await new Promise(resolve => setTimeout(resolve, 4000));
        await waitForElement("#agreement-checkbox-base", 10000).then(checkbox => checkbox.click());
        console.log("Clicking submit...");
        await waitForElement('button[aria-label="Submit"]', 10000).then(button => button.click());
        await waitForElement('button[data-testid="dialog-submit-button"]', 10000).then(button => button.click());
    } catch (error) {
        console.error("Error in autoSubmitPeerAssignment:", error);
    }
}

// Chức năng tự động làm bài thảo luận
async function autoCompleteDiscussions() {
    if (!isUrlMatching("/learn/")) {
        alert("This is not a course page, please go to your course page first");
        return;
    }

    const assignments = await fetchCourseAssignments();
    const courseScript = document.querySelector("body > script:nth-child(3)")?.innerText;
    const courseIdMatch = courseScript?.match(/(\d+~[A-Za-z0-9-_]+)/);
    const courseId = courseIdMatch?.[1].split("~")[0];
    const { csrf3Token } = await chrome.storage.sync.get(["csrf3Token"]);

    for (const assignment of assignments) {
        if (assignment.href.includes("/discussionPrompt/") && !assignment.completed && !assignment.locked) {
            const discussionData = await fetch(`https://www.coursera.org/api/onDemandDiscussionPrompts.v1/${courseId}~${assignment.course_id}~${assignment.itemId}?fields=onDemandDiscussionPromptQuestions.v1(content,creatorId,createdAt,forumId,sessionId,lastAnsweredBy,lastAnsweredAt,totalAnswerCount,topLevelAnswerCount,viewCount),promptType,question&includes=question`)
                .then(res => res.json());
            const questionId = discussionData.elements[0]?.promptType?.definition?.courseItemForumQuestionId.split("~")[2];

            await fetch("https://www.coursera.org/api/onDemandCourseForumAnswers.v1/?fields=content%2CforumQuestionId%2CparentForumAnswerId%2Cstate%2CcreatorId%2CcreatedAt%2Corder%2CupvoteCount%2CchildAnswerCount%2CisFlagged%2CisUpvoted%2CcourseItemForumQuestionId%2CparentCourseItemForumAnswerId", {
                method: "POST",
                headers: { "x-csrf3-token": csrf3Token },
                body: JSON.stringify({
                    content: {
                        typeName: "cml",
                        definition: {
                            dtdId: "discussion/1",
                            value: `<co-content><text>${generateRandomString(10)}</text></co-content>`
                        }
                    },
                    courseForumQuestionId: `${assignment.course_id}~${questionId}`
                })
            }).then(res => res.json());

            console.log(`Submitted discussion for course_id: ${assignment.course_id}, itemId: ${assignment.itemId}`);
            await new Promise(resolve => setTimeout(resolve, 10500)); // Chờ 10.5 giây
        }
    }

    console.log("Completed all discussion API requests, reloading page...");
    location.reload();
}

// Chức năng lấy danh sách bài tập từ khóa học
async function fetchCourseAssignments() {
    // Giả lập hàm Ai() trong mã gốc, cần điều chỉnh theo API thực tế của Coursera
    return []; // Thay bằng logic thực tế nếu cần
}

// Chức năng vô hiệu hóa AI chấm điểm
async function disableAIGrading() {
    if (!isUrlMatching("/learn/")) {
        alert("This is not a course page, please go to your course page first");
        return;
    }

    const courseScript = document.querySelector("body > script:nth-child(3)")?.innerText;
    const courseIdMatch = courseScript?.match(/(\d+~[A-Za-z0-9-_]+)/);
    const courseId = courseIdMatch?.[1].split("~")[0];
    const courseLink = document.querySelector(".m-a-0.body > a")?.getAttribute("data-click-value");
    const courseData = JSON.parse(courseLink || "{}");

    const submissionData = await fetch(`https://www.coursera.org/api/onDemandPeerAssignmentPermissions.v1/${courseId}~${courseData.course_id}~${courseData.item_id}/?fields=deleteSubmission%2ClistSubmissions%2CreviewPeers%2CviewReviewSchema%2CanonymousPeerReview%2ConDemandPeerSubmissionProgresses.v1(latestSubmissionSummary%2ClatestDraftSummary%2ClatestAttemptSummary)%2ConDemandPeerReceivedReviewProgresses.v1(evaluationIfReady%2CearliestCompletionTime%2CreviewCount%2CdefaultReceivedReviewRequiredCount)%2ConDemandPeerDisplayablePhaseSchedules.v1(currentPhase%2CphaseEnds%2CphaseStarts)&includes=receivedReviewsProgress%2CsubmissionProgress%2CphaseSchedule`)
        .then(res => res.json())
        .then(data => data.linked?.["onDemandPeerSubmissionProgresses.v1"][0]?.latestSubmissionSummary?.computed.id);

    await fetch("https://www.coursera.org/graphql-gateway?opname=RequestGradingByPeer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify([{
            operationName: "RequestGradingByPeer",
            variables: {
                input: {
                    courseId: courseData.course_id,
                    itemId: courseData.item_id,
                    submissionId: submissionData,
                    reason: "EXPECTED_HIGHER_SCORE|ok"
                }
            },
            query: `mutation RequestGradingByPeer($input: PeerReviewAi_RequestGradingByPeerInput!) {
                PeerReviewAi_RequestGradingByPeer(input: $input) {
                    submissionId
                    __typename
                }
            }`
        }])
    }).then(res => {
        if (res.status === 200) location.reload();
    }).catch(error => console.error("Error in disableAIGrading:", error));
}
// Khởi tạo ứng dụng React
const { createRoot } = ReactDOM;
const { useState, useEffect } = React;

// Thành phần nút bấm
function Button({ children, onClick, isLoading, title, icon }) {
    return (
        <button
            title={title}
            onClick={onClick}
            className="flex-shrink-0 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-0 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border border-blue-700 dark:border-blue-600 hover:border-blue-800 dark:hover:border-blue-700 gap-2 select-none disabled:bg-gray-400 disabled:text-gray-500 disabled:border-gray-400 disabled:dark:bg-gray-800 disabled:dark:text-gray-500 disabled:dark:border-gray-800"
            disabled={isLoading}
        >
            {isLoading ? <LoadingIcon /> : icon}
            {children}
        </button>
    );
}

// Thành phần Loading Icon
function LoadingIcon({ size = 16 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rotate-cw rotate">
            <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
            <path d="M21 3v5h-5" />
        </svg>
    );
}

// Thành phần chính của giao diện
function CourseraToolUI() {
    const [courseList, setCourseList] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState("SSL101c");
    const [isPanelVisible, setPanelVisible] = useState(false);
    const [settings, setSettings] = useState({
        isAutoSubmitQuiz: true,
        isDebugMode: false
    });
    const [loadingStates, setLoadingStates] = useState({
        isLoadingReview: false,
        isLoadingQuiz: false,
        isLoadingSubmitPeerGrading: false,
        isLoadingDiscuss: false,
        isLoadingCompleteWeek: false,
        isLoadingDisableAI: false
    });

    useEffect(() => {
        (async () => {
            // Tải danh sách khóa học
            const courses = await fetch("https://ecec123ecec.github.io/coursera-db/courseMap.json", { cache: "no-store" }).then(res => res.json());
            setCourseList(courses);

            // Xác định khóa học hiện tại
            const storedCourse = await chrome.storage.local.get("course");
            Object.entries(courses).forEach(([courseId, courseData]) => {
                courseData.related.forEach(url => {
                    if (isUrlMatching(url)) {
                        chrome.storage.local.set({ course: courseId });
                        setSelectedCourse(courseId);
                    }
                });
            });

            // Tải cài đặt
            const { isAutoSubmitQuiz } = await chrome.storage.local.get("isAutoSubmitQuiz");
            const { isShowControlPanel } = await chrome.storage.local.get("isShowControlPanel");
            const { isDebugMode } = await chrome.storage.local.get("isDebugMode");
            setSettings({
                isAutoSubmitQuiz: isAutoSubmitQuiz ?? true,
                isDebugMode: isDebugMode ?? false
            });
            setPanelVisible(isShowControlPanel ?? true);

            // Tự động làm quiz nếu được bật
            if ((isAutoSubmitQuiz ?? true) && (isUrlMatching("/assignment-submission") || isUrlMatching("/exam") || isUrlMatching("/quiz"))) {
                setLoadingStates(prev => ({ ...prev, isLoadingQuiz: true }));
                await autoSubmitQuiz(selectedCourse); // Hàm này cần được định nghĩa thêm nếu cần
                setLoadingStates(prev => ({ ...prev, isLoadingQuiz: false }));
            }
        })();
    }, []);

    return (
        <>
            {/* Nút hiển thị panel */}
            <div
                className={`w-10 h-10 rounded-full fixed bottom-3 right-6 p-2 cursor-pointer bg-no-repeat bg-center bg-cover transition-all duration-300 ${isPanelVisible ? "translate-y-[100px] opacity-0" : "translate-y-0 opacity-100"}`}
                onClick={() => {
                    setPanelVisible(true);
                    chrome.storage.local.set({ isShowControlPanel: true });
                }}
                style={{
                    backgroundImage: "url(https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/71180874e10407031ecd7b62e27dec77.png?auto=format%2Ccompress&dpr=1&w=32&h=32)",
                    zIndex: 1000
                }}
            />

            {/* Thanh thông báo loading */}
            <div className={`transition-all fixed top-4 right-8 bg-blue-700 dark:bg-blue-600 font-bold text-white flex justify-center items-center gap-4 text-xl px-6 py-3 rounded-lg ${Object.values(loadingStates).some(state => state) ? "-translate-y-0" : "-translate-y-20"}`}>
                <LoadingIcon size={30} />
                Loading
            </div>

            {/* Panel điều khiển */}
            <div className={`bg-white absolute border border-black -bottom-4 p-4 w-[470px] right-0 rounded-md transition-all ${isPanelVisible ? "-translate-x-0 opacity-100" : "translate-x-[500px] opacity-0"}`}>
                <div className="absolute top-2 right-2 cursor-pointer" onClick={() => {
                    setPanelVisible(false);
                    chrome.storage.local.set({ isShowControlPanel: false });
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m6 17 5-5-5-5" />
                        <path d="m13 17 5-5-5-5" />
                    </svg>
                </div>

                {/* Phần Skipping */}
                <div className="font-bold text-base mb-3 flex gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z" />
                        <path d="m6.2 5.3 3.1 3.9" />
                        <path d="m12.4 3.4 3.1 4" />
                        <path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
                    </svg>
                    Skipping
                </div>
                <div className="flex gap-2">
                    <Button
                        title="Auto skip all readings & videos"
                        onClick={async () => {
                            setLoadingStates(prev => ({ ...prev, isLoadingCompleteWeek: true }));
                            await autoCompleteWeek();
                            setLoadingStates(prev => ({ ...prev, isLoadingCompleteWeek: false }));
                        }}
                        isLoading={loadingStates.isLoadingCompleteWeek}
                    >
                        Skip videos & readings
                    </Button>
                    <Button
                        title="Auto do all discussion prompt"
                        onClick={async () => {
                            setLoadingStates(prev => ({ ...prev, isLoadingDiscuss: true }));
                            await autoCompleteDiscussions();
                            setLoadingStates(prev => ({ ...prev, isLoadingDiscuss: false }));
                        }}
                        isLoading={loadingStates.isLoadingDiscuss}
                    >
                        Skip discussions
                    </Button>
                </div>

                {/* Phần Assignment */}
                <div className="font-bold text-base my-3 flex gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M8 2v4" />
                        <path d="M12 2v4" />
                        <path d="M16 2v4" />
                        <rect width="16" height="18" x="4" y="4" rx="2" />
                        <path d="M8 10h6" />
                        <path d="M8 14h8" />
                        <path d="M8 18h5" />
                    </svg>
                    Assignment
                </div>
                <div className="flex gap-2 mt-2">
                    <Button
                        title="Auto submit assignments (May not work)"
                        onClick={async () => {
                            setLoadingStates(prev => ({ ...prev, isLoadingSubmitPeerGrading: true }));
                            await autoSubmitPeerAssignment();
                            setLoadingStates(prev => ({ ...prev, isLoadingSubmitPeerGrading: false }));
                        }}
                        isLoading={loadingStates.isLoadingSubmitPeerGrading}
                    >
                        Auto submit
                    </Button>
                    <Button
                        title="Auto grade assignments"
                        onClick={async () => {
                            setLoadingStates(prev => ({ ...prev, isLoadingReview: true }));
                            await autoReviewAssignments();
                            setLoadingStates(prev => ({ ...prev, isLoadingReview: false }));
                        }}
                        isLoading={loadingStates.isLoadingReview}
                    >
                        Auto grade
                    </Button>
                    <Button
                        title="Disable AI grading for your submission"
                        onClick={async () => {
                            setLoadingStates(prev => ({ ...prev, isLoadingDisableAI: true }));
                            await disableAIGrading();
                            setLoadingStates(prev => ({ ...prev, isLoadingDisableAI: false }));
                        }}
                        isLoading={loadingStates.isLoadingDisableAI}
                    >
                        Disable AI grading
                    </Button>
                </div>

                {/* Phần Quiz Automation */}
                <div className="font-bold text-base my-3 flex gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                        <path d="M12 17h.01" />
                    </svg>
                    Quiz Automation
                </div>
                <div className="flex gap-4 items-center">
                    <span className="font-semibold">Source:</span>
                    <select
                        className="py-1 px-3 border rounded-lg focus-visible:outline-none"
                        onChange={e => {
                            chrome.storage.local.set({ course: e.target.value });
                            setSelectedCourse(e.target.value);
                        }}
                        value={selectedCourse}
                    >
                        {Object.entries(courseList).map(([courseId, courseData]) => (
                            <option
                                key={courseId}
                                value={courseId}
                                disabled={courseData?.status === "ongoing"}
                            >
                                {`${courseId} - (${courseData?.status.toUpperCase()})`}
                            </option>
                        ))}
                    </select>
                    <Button
                        title="Start auto quiz"
                        onClick={async () => {
                            setLoadingStates(prev => ({ ...prev, isLoadingQuiz: true }));
                            await autoSubmitQuiz(selectedCourse); // Cần định nghĩa hàm này nếu cần
                            setLoadingStates(prev => ({ ...prev, isLoadingQuiz: false }));
                        }}
                        isLoading={loadingStates.isLoadingQuiz}
                        icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22"><path fill="currentColor" d="M8 5v14l11-7z" /></svg>}
                    >
                        Start
                    </Button>
                </div>

                {/* Phần Setting */}
                <div className="font-bold text-base my-3 flex gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                        <circle cx="12" cy="12" r="3" />
                    </svg>
                    Setting
                </div>
                <div className="grid grid-cols-2 mt-3">
                    <div className="flex items-center mb-4">
                        <input
                            id="auto-submit-quiz"
                            type="checkbox"
                            checked={settings.isAutoSubmitQuiz}
                            onChange={() => {
                                setSettings(prev => {
                                    chrome.storage.local.set({ isAutoSubmitQuiz: !prev.isAutoSubmitQuiz });
                                    return { ...prev, isAutoSubmitQuiz: !prev.isAutoSubmitQuiz };
                                });
                            }}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label htmlFor="auto-submit-quiz" className="ms-2 text-sm font-medium text-gray-900 !mb-0">
                            Auto submit quiz
                        </label>
                    </div>
                </div>

                {/* Footer */}
                <div className="text-xs font-semibold pt-3 flex">
                    <div className="grow" />
                    <div className="flex gap-4">
                        <a className="grow-0 flex gap-1 items-center hover:text-blue-700 hover:underline" target="_blank" href="https://ecec123ecec.github.io/coursera-db/how-to-use.html">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                                <path d="M12 17h.01" />
                            </svg>
                            How to use?
                        </a>
                        <a className="grow-0 flex gap-1 items-center hover:text-blue-700 hover:underline" target="_blank" href="https://chromewebstore.google.com/detail/coursera-tool/hdadbgohdjnhileochcldikbphbonalg/reviews">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                                <path d="M8 12h.01" />
                                <path d="M12 12h.01" />
                                <path d="M16 12h.01" />
                            </svg>
                            Give Feedback
                        </a>
                        <a className="grow-0 flex gap-1 items-center hover:text-blue-700 hover:underline" target="_blank" href="https://www.facebook.com/au.kien.thanh.2307">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 16v-4" />
                                <path d="M12 8h.01" />
                            </svg>
                            Support
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

// Khởi chạy ứng dụng
waitForElement("html").then(() => {
    const appContainer = document.createElement("div");
    appContainer.id = "coursera-tool";
    appContainer.style.zIndex = "5000";
    appContainer.style.position = "fixed";
    appContainer.style.bottom = "36px";
    appContainer.style.right = "36px";
    document.body.appendChild(appContainer);
    createRoot(appContainer).render(<CourseraToolUI />);
});