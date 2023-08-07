import './artExperience.css';

function artExperience(props) {
    return (
      <div className="artExperience">
        <div className="art-Project-Description">
          <div className="art-Project-Small-Description">
              <div className="art-Project-Name">
                {props.name}
              </div>
  
              <div className="art-Project-Title">
                {props.title}
              </div>
  
              <div className="art-Project-Time">
                {props.time}
              </div>
  
              <div className="art-Project-Text">
                {props.text}
              </div>
  
          </div>
  
        </div>
        <img className="artPic" src={props.image} alt="chopper"></img>
      </div>
    );
  }
  
  export default artExperience;