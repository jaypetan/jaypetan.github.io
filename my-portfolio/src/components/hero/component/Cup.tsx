import "./Cup.css";

export default function Cup() {
  return (
    <div>
      <div className="cup-wrapper">
        <div className="cup-content">
          <div className="like">&#10084;</div>
          <div className="cup-body" />
          <div className="cup-body-shadow" />
          <div className="cup-body-bottom" />
          <div className="cup-label" />
          <div className="cup-label-red">
            <div className="cup-label-shadow" />
          </div>
          <div className="face">
            <div className="face-eyes" />
            <div className="face-mouth" />
            <div className="face-blush" />
          </div>
          <div className="cup-upper">
            <div className="cup-upper-shadow" />
          </div>
          <div className="cup-middle" />
          <div className="cup-upper">
            <div className="cup-upper-shadow" />
            <div
              className="fl
            oor"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
