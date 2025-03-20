import React, { useState, useEffect } from "react";
import { MdContentCopy } from "react-icons/md";
import { IconButton, Tooltip } from "@mui/material";
import Zoom from "@mui/material/Zoom";
import ScrollAnimation from "react-animate-on-scroll";

const javaServerAPI = "https://api.mcstatus.io/v2/status/java/mc.slighlys.xyz";
const bedrockServerAPI = "https://api.mcstatus.io/v2/status/bedrock/mcpe.slighlys.xyz:1239";

function ServerStatus() {
  const [javaServer, setJavaServer] = useState(null);
  const [bedrockServer, setBedrockServer] = useState(null);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const fetchServerStatus = async () => {
      try {
        const [javaRes, bedrockRes] = await Promise.all([
          fetch(javaServerAPI).then(res => res.json()),
          fetch(bedrockServerAPI).then(res => res.json()),
        ]);
        
        setJavaServer(javaRes);
        setBedrockServer(bedrockRes);
      } catch (error) {
        console.error("Failed to fetch server data", error);
      }
    };

    fetchServerStatus();
    const interval = setInterval(fetchServerStatus, 30000);
    return () => clearInterval(interval);
  }, []);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setShowTooltip(true);
    setTimeout(() => {
      setShowTooltip(false);
    }, 700);
  };

  return (
    <>
      <svg height="100%" width="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M 0,400 C 0,400 0,200 0,200 C 114.35714285714289,156.53571428571428 228.71428571428578,113.07142857142858 351,131 C 473.2857142857142,148.92857142857142 603.4999999999998,228.25 713,248 C 822.5000000000002,267.75 911.2857142857144,227.92857142857142 1029,210 C 1146.7142857142856,192.07142857142858 1293.3571428571427,196.03571428571428 1440,200 C 1440,200 1440,400 1440,400 Z"
          stroke="none"
          strokeWidth="0"
          fill="#151418ff"
          transform="rotate(180 720 200)"
        ></path>
      </svg>

      <div className="container" style={{ textAlign: "center" }}>
        <h1 style={{fontWeight: "bolder"}}>Server Status</h1>

        {/* Fix layout issue by applying flex directly to this wrapper */}
        <ScrollAnimation animateIn="fadeIn">
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            flexWrap: "wrap", // Ensures responsiveness
            marginTop: "20px"
          }}>
            <ServerInfo title="Java Edition" server={javaServer} ip="mc.slighlys.xyz" copyToClipboard={copyToClipboard} showTooltip={showTooltip} />
            <ServerInfo title="Bedrock Edition" server={bedrockServer} ip="mcpe.slighlys.xyz:1239" copyToClipboard={copyToClipboard} showTooltip={showTooltip} isBedrock />
          </div>
        </ScrollAnimation>
      </div>
      <svg height="100%" width="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M 0,400 C 0,400 0,200 0,200 C 114.35714285714289,156.53571428571428 228.71428571428578,113.07142857142858 351,131 C 473.2857142857142,148.92857142857142 603.4999999999998,228.25 713,248 C 822.5000000000002,267.75 911.2857142857144,227.92857142857142 1029,210 C 1146.7142857142856,192.07142857142858 1293.3571428571427,196.03571428571428 1440,200 C 1440,200 1440,400 1440,400 Z"
          stroke="none"
          strokeWidth="0"
          fill="#151418ff"
          transform="rotate(360 720 200)"
        ></path>
      </svg>
      <svg height="100%" width="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M 0,400 C 0,400 0,200 0,200 C 114.35714285714289,156.53571428571428 228.71428571428578,113.07142857142858 351,131 C 473.2857142857142,148.92857142857142 603.4999999999998,228.25 713,248 C 822.5000000000002,267.75 911.2857142857144,227.92857142857142 1029,210 C 1146.7142857142856,192.07142857142858 1293.3571428571427,196.03571428571428 1440,200 C 1440,200 1440,400 1440,400 Z"
          stroke="none"
          strokeWidth="0"
          fill="#151418ff"
          transform="rotate(180 720 200)"
        ></path>
      </svg>
    </>
  );
}







const ServerInfo = ({ title, server, ip, copyToClipboard, showTooltip, isBedrock }) => {
  const isOnline = server && server.online;
  const bgColor = isOnline ? "#28a745" : "#dc3545"; // Green for online, Red for offline
  const [host, port] = isBedrock ? ip.split(":") : [ip, ""];

  return (
    <div style={{
      flex: "1",
      maxWidth: "400px",
      minWidth: "300px",
      padding: "20px",
      borderRadius: "10px",
      background: bgColor,
      textAlign: "center",
      boxShadow: "0 4px 8px rgba(252, 252, 252, 0.2)",
      transition: "0.3s",
    }}>
      <h2 style={{ fontWeight: "bold" }}>{title}</h2>

      {/* IP & Port Container */}
      <div 
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(252, 252, 252, 0.2)",
          padding: "8px 12px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(252, 252, 252, 0.2)",
          width: "100%",
          margin: "auto",
          gap: "10px"
        }}
      >


        {/* IP Address */}
        <div style={{
          flex: "1",
          padding: "6px",
          background: "rgba(252, 252, 252, 0.2)",
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <p style={{ margin: "0", fontWeight: "bold", fontSize: "14px" }}>
            ip: {host}
          </p>
          <IconButton onClick={() => copyToClipboard(ip)} size="small">
            <MdContentCopy size={16} style={{ cursor: "pointer", color: "white" }}/>
          </IconButton>
        </div>
                {/* Port (For Bedrock) - Left Side */}
                {isBedrock && (
          <div style={{
            padding: "6px 10px",
            background: "rgba(0, 0, 0, 0.6)",
            borderRadius: "8px",
            textAlign: "center",
            minWidth: "60px"
          }}>
            <p style={{ margin: "0", fontWeight: "bold", color: "#ddd", fontSize: "14px" }}>
              port: {port}
            </p>
            
          </div>
        )}
      </div>

      {!server ? (
        <p>Loading...</p>
      ) : (
        <>
          <p><strong>MOTD:</strong> {server.motd.clean}</p>
          <p><strong>Version:</strong> {isBedrock ? server.version.name : server.version.name_clean}</p>
          <p><strong>Players:</strong> {server.players.online} / {server.players.max}</p>
        </>
      )}
    </div>
  );
};








export default ServerStatus;
