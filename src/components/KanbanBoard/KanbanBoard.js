import React from 'react';
import './KanbanBoard.css';

function KanbanBoard() {
  // Example data for tasks in different stages
  const kanbanData = {
    todo: [
      { id: 1, title: 'Market Research', description: 'Conduct market analysis for new product line.' },
      { id: 2, title: 'Product Development', description: 'Plan feature set for upcoming product release.' },
      { id: 3, title: 'Content Creation', description: 'Write blog post on industry trends.' },
      { id: 4, title: 'Sales and Marketing', description: 'Create landing page for new product.' },
      { id: 5, title: 'Administrative Tasks', description: 'Review and finalize budget for next quarter.' },
    ],
    inProgress: [
      { id: 6, title: 'Product Testing', description: 'Conduct beta testing of new software version.' },
      { id: 7, title: 'Client Meetings', description: 'Prepare presentation for client meeting.' },
      { id: 8, title: 'Website Updates', description: 'Implement SEO optimizations on company website.' },
      { id: 9, title: 'Customer Support', description: 'Resolve escalated customer issues.' },
      { id: 10, title: 'Operations', description: 'Streamline inventory management processes.' },
    ],
    done: [
      { id: 11, title: 'Event Planning', description: 'Host successful company conference.' },
      { id: 12, title: 'Performance Review', description: 'Conduct annual performance reviews for team members.' },
      { id: 13, title: 'Financial Reporting', description: 'Generate quarterly financial statements.' },
      { id: 14, title: 'Quality Assurance', description: 'Complete testing phase for software updates.' },
    ],
  };

  return (
    <div className="kanban-board">
      <div className="board-column">
        <h3 align ="center">TO DO</h3>
        {kanbanData.todo.map((task) => (
          <div key={task.id} className="task">
            <h4>{task.title}</h4>
            <p>{task.description}</p>
          </div>
        ))}
      </div>
      <div className="board-column">
        <h3 align ="center">IN PROGRESS</h3>
        {kanbanData.inProgress.map((task) => (
          <div key={task.id} className="task">
            <h4>{task.title}</h4>
            <p>{task.description}</p>
          </div>
        ))}
      </div>
      <div className="board-column">
        <h3 align ="center">DONE</h3>
        {kanbanData.done.map((task) => (
          <div key={task.id} className="task">
            <h4>{task.title}</h4>
            <p>{task.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KanbanBoard;
