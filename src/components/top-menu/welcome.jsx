const Welcome = (props) => {
  return (
    <div className="border border-black p-4 flex flex-col justify-center">
      Welcome, {props.currentUsers}
    </div>
  );
};

export default Welcome;
