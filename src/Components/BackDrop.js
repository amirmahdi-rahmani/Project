const BackDrop = (props) => {
  return <div 
  onClick={props.click}
  className="fixed top-0 start-0 z-40 bg-black/50 w-screen h-screen">

  </div>;
};
export default BackDrop;
