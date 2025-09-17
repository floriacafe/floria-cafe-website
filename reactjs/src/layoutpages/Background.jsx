import "./background.css";
import Ballpit from "../blocks/ballpit";

function Background() {
  return (
    <>
      <div
        className="bg-ballpit"
        style={{
          pointerEvents: "none",
          position: "fixed",
          inset: 0, // top:0,right:0,bottom:0,left:0
          zIndex: 0,
        }}
      >
        <Ballpit
          followCursor={false}
          count={35}
          minSize={0.6}
          maxSize={1.2}
          size0={1.4}
          gravity={0}
          colors={[0xfff0f6, 0xffd6e0, 0xffb7c5, 0xff8da1]}
        />
      </div>
    </>
  );
}

export default Background;
