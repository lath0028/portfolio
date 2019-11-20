import React, { Component } from 'react';
import './App.css';
class App extends Component {
  constructor(){
    super()
    this.state={
      showAntotechwireframes:false,
      showAntotechwireframestext:"Watch Video",
      iosfinaltext:"Watch Video",
      algonquinfoodtext:"Watch Video",
      cheopainText:"Try Demo",
      aceText:"Watch Video",
      iosfinal:false,
      algonquinfood:false,
      cheopain:false,
      ace:false,
      listCount:0,
      uiux:false,
      uiuxtext:"Watch Demo"
    }
  }
  componentDidMount(){
    let list=document.querySelectorAll('.skills-animation');
    let listCount=0
    if(listCount>6)listCount=0

    console.log(list)
    setInterval(()=>{
      list[this.state.listCount].classList.add("activate")
        setTimeout(()=>{
          list[this.state.listCount].classList.remove("activate");
          let listCountAdder=this.state.listCount
      listCountAdder++
      if(listCountAdder>6)listCountAdder=0
        this.setState({
          listCount:listCountAdder
        })
        }, 500)
      
      }, 1000)
    //  },8000);
  }
  showGraphics=(ev)=>{
    this.setState({
      showAntotechwireframes:false,
      iosfinal:false,
      algonquinfood:false,
      cheopain:false,
      ace:false,
      uiux:false,
      uiuxtext:"Watch Video",
      showAntotechwireframestext:"Watch Video",
      iosfinaltext:"Watch Video",
      algonquinfoodtext:"Watch Video",
      cheopainText:"Try Demo",
      aceText:"Watch Video",
    })
    let show=ev.target.id
    switch(show){
      case "ios":
      let original=this.state.iosfinaltext;
      if(original==="Watch Video"){
        original="Close";
      }else if(original === "Close"){
        original="Watch Video"
      }
    this.setState({
      iosfinal:!this.state.iosfinal,
      iosfinaltext:original,
    })
    break;
    case "uiux":
    let original1=this.state.uiuxtext;
    if(original1==="Watch Video"){
      original1="Close";
    }else if(original1 === "Close"){
      original1="Watch Video"
    }
  this.setState({
    uiux:!this.state.uiux,
    uiuxtext:original1,
  })
  break;
    case "ace":
      let orgnal=this.state.aceText;
      if(orgnal==="Watch Video"){
        orgnal="Close";
      }else if(orgnal === "Close"){
        orgnal="Watch Video"
      }
    this.setState({
      ace:!this.state.ace,
      aceText:orgnal,
    })
    break;
    case "antotech":
    let origina=this.state.showAntotechwireframestext;
      if(origina==="Watch Video"){
        origina="Close";
      }else if(origina === "Close"){
        origina="Watch Video"
      }
    this.setState({
      showAntotechwireframes:!this.state.showAntotechwireframes,
      showAntotechwireframestext:origina
    })
    break;
    case "algonquinfood":
    let origin=this.state.algonquinfoodtext;
      if(origin==="Watch Video"){
        origin="Close";
      }else if(origin === "Close"){
        origin="Watch Video"
      }
    this.setState({
      algonquinfoodtext:origin,
      algonquinfood:!this.state.algonquinfood
    })
    break;
    case "cheopain":
    let origi=this.state.cheopainText;
      if(origi==="Try Demo"){
        origi="Close";
      }else if(origi === "Close"){
        origi="Try Demo"
      }
    this.setState({
      cheopain:!this.state.cheopain,
      cheopainText:origi,
    })
    break;
    default:
  }

    console.log(this.state.showAntotechwireframes);
  }
  render() {
    return (
      <div className="App">
      
        <header className="App-header">
          <h1> Web Application Developer </h1>
          <div className="objective">
              <h4>Objective</h4>
              <p>What motivates me and gets me
passionate is the opprtunity to design 
user interfaces and make them beautiful
to look at and simple to use and fast for 
competing tasks.My combined 
experience at different companines and 
in different projects taught me a lot 
about design and development and,
most importantly, user behaviour. </p>
            </div>
        </header>
        <div className="doc">
          <div className="left-col">
            <div className="name"><h1>Prashant</h1><h1>Lathiya</h1></div>
            <div className="contact">
              <img alt="mail" src={require("./assets/email.svg")} />
              <a href="mailto:p.lathiya93@gmail.com">p.lathiya93@gmail.com</a>
              <img alt="mail" src={require('./assets/phone.svg')} />
              <a href="tel:+13439888494">(343)988-8494</a>
              <img alt="mail" src={require('./assets/linkedin.svg')} />
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/prashant-lathiya-76750a70/">https://www.linkedin.com/in/devndesign/</a>
              <img alt="github" src={require('./assets/github.svg')} />
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/lath0028">https://github.com/lath0028</a>
       
            </div>
            <div className="skills"><h2>Skills</h2>
              <ul type="1">
                                     <li className="skills-animation">Goal oriented.</li>
                
                <li className="skills-animation">Strong social and interpersonal skills.</li>
                                     <li className="skills-animation">Highly skilled in designing, developing and testing software.
                <li className="skills-animation">Innovative problem solving skills.</li>
                                     <li className="skills-animation">Thorough understanding of data-structures and algorithms.</li>
                <li className="skills-animation">Leadership skills and initiative.</li>
                <li className="skills-animation">Strong collaboration skills.</li>
                </li>
                                     <li className="skills-animation">Highly dedicatrd in hard-working and completing tasks efficiently.</li>
                <li className="skills-animation">High level of attention to detail and strong aptitude for learning new technologies.</li>
              </ul>
            </div>
          </div>
          <div className="right-col">
            <div className="experience">
            <div className="exp">
              <h2>Work Experience</h2>
            </div>
              <h3>MASV.io - UI/UX Developer</h3>
              <i>January 2019 – April 2019</i>
                <ul>
                    <li>As an UI/UX Developer,I Created personas and scenarios and designed wireframes and prototypes  on the 
basis of that and clickable visual design later on.</li>
                    <li>I designed business cards through Adobe XD and 
Adobe Illustrator and developed automatic speech recognizer in Adobe XD who responds 
on how you answer the question</li>
                    <li>Developed an application which sends large files.</li>
                    
                </ul>
              <h3>ACUTE INFORMATICS PVT LTD - Junior Database Developer </h3>
              <i>Dec 2016– March 2017</i>
             <ul>
               <li>Gained expertise in database development.</li>
               <li>Did migration of ‘KHERALU co-operative bank LTD’.</li>
               <li>Learned how to convert existing database into oracle, reads it thoroughly 
and arranged them properly in particular tables by creating 
subqueries, views, indexes whenever needed..</li>
               <li>Learned how to provide support to the clients i.e. Solving errors, updating 
database etc.</li>
               <li>Learned relational database MySQL, how to generate schema for relational database and complex queries of MySQL.</li>
                                     <li>Used to perform different SQL operations from PL/SQL like managing 
cursors, DML operations</li>
             </ul>
            </div>

            <div className="experience-h1-ed experience-h1 marg">
              <h2>Education</h2>
              </div>
          <div className="education">
              <h3>MOBILE APPLICATION DESIGN &amp; DEVELOPMENT</h3>
              <p className="miletone-left-para-600">Algonquin College of Applied Arts and Technology</p>
              <p>Expected Graduate: Spring 2019.</p>
              <ul className="education-ul">
                <li>Dean's Honours List: Fall 2017, Winter 2018 and Fall 2018</li>
                <li>GPA: 3.4/4</li>
              </ul>
            <h3>MASTER'S IN COMPUTER APPLICATION</h3>
              <p className="miletone-left-para-600">Kadi Sarva Viswa Vidhyalaya </p>
              <ul className="education-ul">
                <li>Coursework: Operating Systems; Advanced Databases; Algorithms; Advanced Programming Languages; Comp. Architecture; Comp. Networking; Applied Electronics; Advanced Mathematics.</li>
                <li>CPI: 8.6/10.</li>
              </ul>
              <h3>BACHELOR'S IN COMPUTER APPLICATION</h3>
              <p className="miletone-left-para-600">Gujarat Technological University </p>
              <ul className="education-ul">
                <li>Undergraduate Coursework: Operating Systems; Databases; Algorithms; Programming Languages; Comp. Architecture; Comp. Networking; Applied Electronics; Mathematics.</li>
                <li>CPI: 6.5/10.</li>
              </ul>
            </div>
            <div className="experience-h1 experience-h1-ed marg">
              <h2>TECHNICAL EXPERTISE</h2>
              </div>
            <div className="Pro-rel-skills">
              <ul className="Pro-rel-skills-ul">
                <li><h3>Programming Languages</h3><p>Java, C#, C++, Python.</p></li>
                <li><h3>Operating Systems</h3><p>Windows, Linux, Mac OS.</p></li>
                <li><h3>Web Based Languages, Frameworks and Libraries</h3><p> React.js, Express, JavaScript, Nodejs, PHP, HTML5, CSS3, XML, Cordova, Workbox, Mocha, Chai, JSON, SaaS, TypeScript.js, Angular.js, Node.js, MVC5, ES6, ASP.net, GraphQL, React Native, Xamarin, JSON, XML, Ajax.
              </p></li>
                <li><h3>Native Mobile</h3><p>React Native, Swift, Kotlin, ObjectiveC.</p></li>
                <li><h3>Databases</h3><p>Firebase, MySQL, MongoDB, SQLite, CosmosDB, PostgreSQL.</p></li>
                <li><h3>Cloud Services</h3><p>Microsoft Azure Node.js App Services, Amazon Web Services.</p></li>
                <li><h3>Testing Tools</h3><p> JavaScript: Mocha and Chai, Android: Record Espresso Test and iOS: Unit Testing.</p></li>
                <li><h3>Tools &amp; IDE</h3><p>Visual Studio, Eclipse Java, Git, Microsoft Office Suite, Android Studio, Xcode.</p></li>
              </ul>
             
            </div>
          </div>
          
        </div>
        <div className="skills-port-section">
        
        <div className="exp">
              <h2>Skills Portfolio</h2>
        </div>
        <div className="skills-port">
        <div id="col-left-portfolio">
        <h3>React Native App for MASV<i> Speech Recognizer for MASV</i></h3>
              <a href="#ace" onClick={this.showGraphics} id="ace" className="vid">{this.state.aceText}</a>
              {this.state.ace&&
              <video width="300" height="600" controls autoPlay>
              <source src={require("./assets/SpeechRecognizerMASV.mp4")} type="video/mp4"/>
              </video>
              }
               <ul className="skills-port-ul">
                <li>Designed in Adobe XD</li>
                <li>Used voice-recognition feature</li>
                <li>Sends large files</li>
              </ul>
              
              <h3>IOS Passport Application</h3>
              <a href="#ios" onClick={this.showGraphics} id="ios" className="vid">{this.state.iosfinaltext}</a>
             
              {this.state.iosfinal&&
              <video width="300" height="600" controls autoPlay>
              <source src={require("./assets/passport_application.mov")} type="video/mp4"/>
              </video>
              }
               <ul className="skills-port-ul">
                <li>Used Swift to develop a passport application to track trips.</li>
                <li>Implemented URLSession and URLRequest to make calls to a JSON API for data.</li>
              </ul>

              <h3>Responsive Images</h3>
              <a target="_blank" rel="noopener noreferrer" href="https://lath0028.github.io/responsive-images/">https://lath0028.github.io/responsive-images/</a>
               <ul className="skills-port-ul">
                <li>Used CSS3 to develop a responsive web page.</li>
                <li>Used CSS3 animation to apply special effects to images.</li>
              </ul>
             
               
              </div>
              <div>
              
                    
                    <h3>UI &amp; UX Design</h3>
              <a href="#uiux" onClick={this.showGraphics} id="uiux" className="vid">{this.state.uiuxtext}</a>
              {this.state.uiux&&
              <video width="300" height="600" controls autoPlay>
              <source src={require("./assets/CareMate_Final_New.mp4")} type="video/mp4"/>
              </video>
                           
                           
              }
              <ul className="skills-port-ul">
                  <li>Designed a CareMate application which helps you to find a caregiver .</li>
                <li>Used Adobe XD to design an interactive visual mock-up.</li>
                <li>Followed by iOS Human Interface Guidelines .</li>
                <li>Followed user-centric design - Research, Prototype, Design, to create intutive UI</li>
              </ul>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
