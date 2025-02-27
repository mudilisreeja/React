import Student from "./Student.jsx";
function App(){
    return(
        <>
        <Student name="shreyansh" age={30} isStudent={true}/>
        <Student name="anil" age={36} /> 
        <Student name="sreeja" age={50}/> 
        <Student name="riya" age={27} isStudent={true}/> 
        </>

    );
}
export default App