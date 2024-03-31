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
        {/* <div className="VideoMove">
            <video src="https://www.youtube.com/watch?v=deqK3hyqebQ&t=1s" width="500" height="300" controls />
        </div> */}

        <div className="MoveVideo">
          <iframe title="videoTitle" width="450" height="300"
            src={props.video}>
            {/* src="https://www.youtube.com/embed/deqK3hyqebQ"> */}
          </iframe>
        </div>

      </div>
    );
  }
  
  export default artExperience;