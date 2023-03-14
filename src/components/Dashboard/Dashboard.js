import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  let navigate = useNavigate();
  const routeExpense = () => {
    navigate("/expense");
  };

  return (
    <div>
      <h3>Dashboard Page</h3>
      <button onClick={routeExpense}>ADD EXPENSE</button>
    </div>
  );
};

export default Dashboard;
