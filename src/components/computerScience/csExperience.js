import './csExperience.css';

function csExperience(props) {
  return (
    <div className="csExperience">
      <div className="cs-Project-Description">
        <div className="cs-Project-Small-Description">
            <div className="cs-Project-Name">
              {props.name}
            </div>
            
            <div className="cs-Project-Time">
              {props.time}
            </div>

            <div className="cs-Project-Text">
                {props.text}
            </div>

            {/* <div className="cs-Project-Link">
            <a href={props.link}>Click here to see my project in detail (if avaliable)!</a>
            </div> */}

        </div>

      </div>

      <img className="csPic" src={props.image} alt="chopper"></img>
    </div>
  );
}

export default csExperience;