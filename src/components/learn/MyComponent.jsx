import './style.css'

const MyComponent = () => {
    // const hoidantic = "eric 1"; // string
    // const hoidanit = 25; // number
    const hoidanit = [1, 2, 3];
    // const hoidanit = {
    //     name: "quan",
    //     age: "12"
    // }
    return (
        <>
            <div> {JSON.stringify(hoidanit)} & hoidanit</div>
            <div>{console.log("toi xin chao")}</div>
            <div className="child"
                style={{ borderRadius: "10px" }}
            >child</div>
        </>
    );
}
export default MyComponent;