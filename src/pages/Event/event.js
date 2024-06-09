import Header from "../../comman/header";
import EventHome from "./eventhome";
import EventDetail from "./eventdetail";
import Footer from "../../comman/footer";

function Event()
{
    return(
        <>
        <Header/>
        <EventHome/>
        <EventDetail/>
        <Footer/>
        </>
    );
}

export default Event;