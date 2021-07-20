import React from "react";
import "./header.css";
import { connect } from "react-redux";
import { selectLanguage } from "../../../Redux/actions/itemActions";

const Header = ({ selectLanguage }) => {
  const languages = [
    "EN-US",
    "DE-DE",
    "FR-FR",
    "PL-PL",
    "ES-ES",
    "PT-BR",
    "ZH-CN",
    "KO-KR",
  ];
  return (
    <div className="header">
      <h1>MARKETPLACE WATCH</h1>
      <select onChange={(lang) => selectLanguage(lang.target.value)}>
        <option>Select Language</option>
        {languages.map((lang) => {
          return <option value={lang}>{lang}</option>;
        })}
      </select>
    </div>
  );
};

export default connect(null, { selectLanguage })(Header);
