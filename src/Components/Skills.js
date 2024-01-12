import React from 'react';
import { FaReact, FaJava, FaDatabase, FaAndroid, FaPhp, FaCloud, FaUnity, FaSpotify } from 'react-icons/fa';
import { SiKotlin } from 'react-icons/si';
const SkillsScreen = () => {
  const iconSize = 40; // Set the desired size for the icons
  return (
    <div style={{margin: "0 auto" ,textAlign:"center"}}>
        <a style={{ marginTop:"20px", marginLeft:"100px",fontSize: '28px', fontWeight: 'bold'}}>My Skills </a>
        <a style={{ marginTop:"20px", marginLeft:"550px",fontSize: '28px', fontWeight: 'bold'}}>Experience </a>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ marginRight: '50px' }}>
                <div style={{ marginTop: '10px',marginBottom: '20px', textAlign: 'center' }}>
                <FaReact size={iconSize} />
                <div style={{ marginTop: '10px' }}>React</div>
            </div>

            <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                <FaJava size={iconSize} />
                <div style={{ marginTop: '10px' }}>Java</div>
            </div>

            <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                <SiKotlin size={iconSize} />
                <div style={{ marginTop: '10px' }}>Kotlin</div>
            </div>

            <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                <FaDatabase size={iconSize} />
                <div style={{ marginTop: '10px' }}>SQL</div>
            </div>

            <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                <FaUnity size={iconSize} />
                <div style={{ marginTop: '10px' }}>Unity</div>
            </div>
        </div>
        <div style={{marginLeft:"200px" }}>
            <div style={{ marginTop:'10px',marginBottom: '20px', textAlign: 'center' }}>
                <FaAndroid size={iconSize} />
                <div style={{ marginTop: '10px' }}>Android Studio</div>
            </div>

            <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                <FaPhp size={iconSize} />
                <div style={{ marginTop: '10px' }}>PHP</div>
            </div>

            <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                <FaCloud size={iconSize} />
                <div style={{ marginTop: '10px' }}>Cloud</div>
            </div>

            <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                <FaPhp size={iconSize} />
                <div style={{ marginTop: '10px' }}>Software Development</div>
            </div>

            <div style={{textAlign: 'center' }}>
                <FaSpotify size={iconSize} />
                <div style={{ marginTop: '10px' }}>Android Development</div>
            </div>
        </div>
        <div style={{ marginLeft: "250px"}}>
            <div style={{ marginTop:"25px" ,borderBottom: "2px solid #333", paddingBottom: "10px", marginBottom: "20px" }}>
                <a style={{ fontSize: "20px", color: "#007BFF", textDecoration: "none", fontWeight: "bold" }}>Web Developer</a>
                <div style={{ marginLeft: "30px", color: "#6C757D" }}>
                    <p>Saint Mary's University</p>
                    <p style={{ marginBottom: "5px" }}>Jan 2022 - April 2022</p>
                </div>
            </div>
            
            <div style={{ borderBottom: "2px solid #333", paddingBottom: "10px", marginBottom: "30px" }}>
                <a style={{ fontSize: "20px", color: "#007BFF", textDecoration: "none", fontWeight: "bold" }}>Sales Associate</a>
                <div style={{ marginLeft: "30px", color: "#6C757D" }}>
                    <p>Atlantic Superstore</p>
                    <p style={{ marginBottom: "5px" }}>Oct 2022 - present</p>
                    </div>
                </div>

                <a style={{marginTop:"10px", marginLeft:"90px", fontSize: '28px', fontWeight: 'bold'}}>Education</a>

                <div style={{ marginTop:"25px" ,borderBottom: "2px solid #333", paddingBottom: "10px", marginBottom: "20px" }}>
                    <a style={{ fontSize: "20px", color: "#007BFF", textDecoration: "none", fontWeight: "bold" }}>Dalhousie University</a>
                    <div style={{ marginLeft: "30px", color: "#6C757D" }}>
                        <p>Bachelor Of Science in Computer Science</p>
                        <p style={{ marginBottom: "5px" }}>September 2022 - present</p>
                    </div>
                </div>

                <div style={{ marginTop:"10px" ,borderBottom: "2px solid #333", paddingBottom: "10px", marginBottom: "20px" }}>
                    <a style={{ fontSize: "20px", color: "#007BFF", textDecoration: "none", fontWeight: "bold" }}>Saint Mary's University</a>
                    <div style={{ marginLeft: "30px", color: "#6C757D" }}>
                        <p>Bachelor Of Science in Computer Science</p>
                        <p>September 2021 - August 2022</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default SkillsScreen;