import { Outlet } from 'react-router-dom';                                     

function Event() {
    return (
    <div className="text-center mt-4">
        <h4>오늘의 이벤트</h4>
        <Outlet />
        </div>
    )
}                                                                     

export default Event;  