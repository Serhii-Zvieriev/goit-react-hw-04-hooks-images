import ReactLoaderSpinner from "react-loader-spinner";

function Loader() {
  return (
    <ReactLoaderSpinner
      type="Grid"
      color="#3f51b5"
      height={60}
      width={60}
      timeout={3000} //3 secs
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
      }}
    />
  );
}

export default Loader;
