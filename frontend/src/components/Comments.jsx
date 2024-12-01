import React, { useState } from "react";
import "./Comments.css";

const Comments = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalComments = 21; // 총 댓글 개수 (예시)
  const commentsPerPage = 7;
  const totalPages = Math.ceil(totalComments / commentsPerPage);
  const [feedbackMenuOpen, setFeedbackMenuOpen] = useState(null);

  const comments = Array.from({ length: totalComments }, (_, i) => ({
    date: `2023-11-${String(i + 1).padStart(2, "0")}`,
    content: `댓글 내용 ${i + 1}`,
    sentiment: i % 3 === 0 ? "긍정" : i % 3 === 1 ? "중립" : "부정",
  }));

  const startIndex = (currentPage - 1) * commentsPerPage;
  const displayedComments = comments.slice(
    startIndex,
    startIndex + commentsPerPage
  );

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const toggleFeedbackMenu = (index) => {
    setFeedbackMenuOpen(feedbackMenuOpen === index ? null : index);
  };

  const handleFeedbackSelect = (index, feedback) => {
    console.log(`Feedback for comment ${index}: ${feedback}`);
    setFeedbackMenuOpen(null);
  };

  return (
    <div className="comments-container">
      <h2 className="comment-title">댓글 분석 결과</h2>
      <div className="comment-header">
        <div className="col">날짜</div>
        <div className="col">댓글</div>
        <div className="col">감정</div>
        <div className="col">피드백</div>
      </div>
      <div className="comment-content">
        {displayedComments.map((comment, index) => (
          <div key={index} className="comment-row">
            <div className="col">{comment.date}</div>
            <div className="col">{comment.content}</div>
            <div className="col">
              <span
                className={`sentiment-container sentiment-${comment.sentiment.toLowerCase()}`}
              >
                {comment.sentiment}
              </span>
            </div>
            <div className="col feedback-col">
              <button
                className="feedback-button"
                onClick={() => toggleFeedbackMenu(index)}
              >
                🚨
              </button>
              {feedbackMenuOpen === index && (
                <div className="feedback-dropdown">
                  <div
                    className="feedback-item"
                    onClick={() => handleFeedbackSelect(index, "긍정")}
                  >
                    긍정
                  </div>
                  <div
                    className="feedback-item"
                    onClick={() => handleFeedbackSelect(index, "중립")}
                  >
                    중립
                  </div>
                  <div
                    className="feedback-item"
                    onClick={() => handleFeedbackSelect(index, "부정")}
                  >
                    부정
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button
          className="pagination-btn"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          {"<"}
        </button>
        <span className="pagination-info">
          {currentPage} / {totalPages}
        </span>
        <button
          className="pagination-btn"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Comments;
