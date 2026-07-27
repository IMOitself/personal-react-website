import { useState } from 'react'
import './App.css'

let date = 'July 27, 2026'
let commits = '2,520'
let streak = 13

function DashboardBanner() {
  return (
    <div className='banner'>
      <div className='date'>{date}</div>
      <div className='columns'>
          <div className="col">
            <div className="val">
              {commits}
            </div>
            <div className="label">total commits</div>
          </div>

          <div className="v-line"/>

          <div className="col">
            <div className="val">
              {streak}
            </div>
            <div className="label">days streak</div>
          </div>

          <div className="v-line"/>

          <div className="col">
            <div className="val">
              <div id='lang'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="4" height="10" x="2" y="12" fill="#8bc34a" rx="2"/><rect width="4" height="10" x="26" y="12" fill="#8bc34a" rx="2"/><path fill="#8bc34a" d="M8 12h16v12H8zm2 12h4v4a2 2 0 0 1-2 2 2 2 0 0 1-2-2zm8 0h4v4a2 2 0 0 1-2 2 2 2 0 0 1-2-2zm3.545-19.759 2.12-2.12A1 1 0 0 0 22.251.707l-2.326 2.326a7.97 7.97 0 0 0-7.85 0L9.75.707a1 1 0 1 0-1.414 1.414l2.12 2.12A7.97 7.97 0 0 0 8 10h16a7.97 7.97 0 0 0-2.455-5.759M14 8h-2V6h2Zm6 0h-2V6h2Z"/></svg>
                <div style={{color: '#d7902e'}}>java</div>
              </div>
            </div>
            <div className="label">tech stacks</div>
          </div>
        </div>
    </div>
  )
}

export default function App() {
  return (
    <>
    <p className='topwarning'>currently doing some baby steps rn. let me cook {" >:D"}</p>

    <div style={{textAlign:'center'}}>
      <h2 style={{opacity: '0.4'}}>reference:</h2>
      <img src={'https://raw.githubusercontent.com/IMOitself/personal-github-banner/master/banner-main.svg'}/>
      <br/>
      <h2 style={{opacity: '0.4'}}>recreation:</h2>
      <DashboardBanner/>

      {/* <img src={'https://raw.githubusercontent.com/IMOitself/personal-github-banner/master/banner-recent-repo.svg'}/>  */}
    </div>

    {/* ======================================================= */}

    <div style={{height:'100vh', textAlign:'center', padding: '16px'}}>
      <div className="banner1 monthbanner">
        <p>JUN</p>
        <p>flags</p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#FFFFFF"><path d="M200-120v-680h360l16 80h224v400H520l-16-80H280v280h-80Z"/></svg>
      </div>
      <br/>
      <div className="banner2 monthbanner">
        <p>MAY</p>
        <p>forever</p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#FFFFFF"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-7-.5-14.5T799-507q-5 29-27 48t-52 19h-80q-33 0-56.5-23.5T560-520v-40H400v-80q0-33 23.5-56.5T480-720h40q0-23 12.5-40.5T563-789q-20-5-40.5-8t-42.5-3q-134 0-227 93t-93 227h200q66 0 113 47t47 113v40H400v110q20 5 39.5 7.5T480-160Z"/></svg>
      </div>
      <br/>
      <div className="banner3 monthbanner">
        <p>APR</p>
        <p>warmups</p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#FFFFFF"><path d="M440-760v-160h80v160h-80Zm266 110-55-55 112-115 56 57-113 113Zm54 210v-80h160v80H760ZM440-40v-160h80v160h-80ZM254-652 140-763l57-56 113 113-56 54Zm508 512L651-255l54-54 114 110-57 59ZM40-440v-80h160v80H40Zm157 300-56-57 112-112 29 27 29 28-114 114Zm113-170q-70-70-70-170t70-170q70-70 170-70t170 70q70 70 70 170t-70 170q-70 70-170 70t-170-70Z"/></svg>
      </div>
      <br/>
      <div className="banner4 monthbanner">
        <p>MAR</p>
        <p>momentum</p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#FFFFFF"><path d="m98-537 168-168q14-14 33-20t39-2l52 11q-54 64-85 116t-60 126L98-537Zm205 91q23-72 62.5-136T461-702q88-88 201-131.5T873-860q17 98-26 211T716-448q-55 55-120 95.5T459-289L303-446Zm332.5-97q33.5 0 56.5-23t23-56.5q0-33.5-23-56.5t-56.5-23q-33.5 0-56.5 23t-23 56.5q0 33.5 23 56.5t56.5 23ZM551-85l-64-147q74-29 126.5-60T730-377l10 52q4 20-2 39.5T718-252L551-85ZM162-318q35-35 85-35.5t85 34.5q35 35 35 85t-35 85q-25 25-83.5 43T87-74q14-103 32-161t43-83Z"/></svg>
      </div>
      <br/>
      <div className="banner5 monthbanner">
        <p>FEB</p>
        <p>locked in</p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#FFFFFF"><path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm296.5-223.5Q560-327 560-360t-23.5-56.5Q513-440 480-440t-56.5 23.5Q400-393 400-360t23.5 56.5Q447-280 480-280t56.5-23.5ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80Z"/></svg>
      </div>
      <br/>
      <div className="banner6 monthbanner">
        <p>JAN</p>
        <p>revival</p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#FFFFFF"><path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm457-560 21-89-71-59 94-8 36-84 36 84 94 8-71 59 21 89-80-47-80 47Z"/></svg>
      </div>
      <br/>
      <div className="banner7 monthbanner">
        <p>NOV</p>
        <p>twentieth</p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#FFFFFF"><path d="m80-80 200-560 360 360L80-80Zm502-378-42-42 224-224q32-32 77-32t77 32l24 24-42 42-24-24q-14-14-35-14t-35 14L582-458ZM422-618l-42-42 24-24q14-14 14-34t-14-34l-26-26 42-42 26 26q32 32 32 76t-32 76l-24 24Zm80 80-42-42 144-144q14-14 14-35t-14-35l-64-64 42-42 64 64q32 32 32 77t-32 77L502-538Zm160 160-42-42 64-64q32-32 77-32t77 32l64 64-42 42-64-64q-14-14-35-14t-35 14l-64 64Z"/></svg>
      </div>
      <br/>
      <div className="banner8 monthbanner">
        <p>OCT</p>
        <p>calamities</p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#FFFFFF"><path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160ZM480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM80-560q0-100 44.5-183.5T244-882l47 64q-60 44-95.5 111T160-560H80Zm720 0q0-80-35.5-147T669-818l47-64q75 55 119.5 138.5T880-560h-80Z"/></svg>
      </div>
      <br/>
      <div className="banner9 monthbanner">
        <p>SEP</p>
        <p>silksong</p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#FFFFFF"><path d="M480-654Zm174 174Zm-348 0Zm174 174Zm0-234L360-660v-220h240v220L480-540Zm180 180L540-480l120-120h220v240H660Zm-580 0v-240h220l120 120-120 120H80ZM360-80v-220l120-120 120 120v220H360Zm120-574 40-40v-106h-80v106l40 40ZM160-440h106l40-40-40-40H160v80Zm280 280h80v-106l-40-40-40 40v106Zm254-280h106v-80H694l-40 40 40 40Z"/></svg>
      </div>
      <br/>
    </div>
    </>
  )
}
