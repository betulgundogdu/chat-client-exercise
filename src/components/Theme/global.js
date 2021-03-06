import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    transition: all 0.25s linear;
  }

  /******  chat colors ***** */

  .outerContainer {
    background-color:  ${({ theme }) => theme.rightMenuBg};
  }
  
  .container {
    background: ${({ theme }) => theme.bg};
  }
  
  .slider {
    background-color: ${({ theme }) => theme.toggleBg};
    border: 1px solid ${({ theme }) => theme.linkActive};
  }
  
  .slider:before {
    background-color: ${({ theme }) => theme.linkActive};
  }
  
  input:checked + .slider {
    background-color: ${({ theme }) => theme.toggleBg};
  }
  
  input:focus + .slider {
    box-shadow: 0 0 1px ${({ theme }) => theme.shadow};
  }

  .typing{
    color:  ${({ theme }) => theme.systemMsg}
  }
  
  /****** menu colors ******/

.menu{
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.rightMenuBg};
}

.tools > .tool {
  border-bottom:1px solid ${({ theme }) => theme.bg};
}

.return{
  // border:.2em solid ${({ theme }) => theme.settingsBtn};
  /* background-color: ${({ theme }) => theme.aux}; */
}

.return > .icon {
  fill: ${({ theme }) => theme.settingsBtn};
}

.tool > .icon{
  fill: ${({ theme }) => theme.buttonColor};
}

.tool:hover{
  background-color: ${({ theme }) => theme.bg};
}

.toggle > svg {
  fill: ${({ theme }) => theme.settingsBtn};
}

  /***** details colors *****/
  a {
    color:  ${({ theme }) => theme.main};
  }
 
  .detail {
    background-color:  ${({ theme }) => theme.rightMenuBg};
  }

  .title > .shareBtn > svg {
    stroke: ${({ theme }) => theme.buttonColor};
  }

  .count{
    color:  ${({ theme }) => theme.text};
  }

  .detail > .header{
    color: ${({ theme }) => theme.text};
    // border-bottom:.1em solid  ${({ theme }) => theme.bg};
  }

  .edit {
    background: transparent;
  }
  
  .edit > svg {
    fill: ${({ theme }) => theme.buttonColor};
  }

  .invite{
    background-color: transparent;
    color: ${({ theme }) => theme.text}
  }

  .users{
    border-top:.1em solid  ${({ theme }) => theme.bg};
  }

  .users > .item {
    background-color: ${({ theme }) => theme.itemBg};
    box-shadow: 0px 1px 2px  ${({ theme }) => theme.shadow};   
  }

  .users > .item > .user  > p  {
    color: ${({ theme }) => theme.text};
  }
   
  /***** input colors ******/
  .form {
    // background: ${({ theme }) => theme.formBg};
    // border:1px solid ${({ theme }) => theme.rightMenuBg};
  }

  .input {
    color: ${({ theme }) => theme.inputColor};
    background-color: ${({ theme }) => theme.inputBg};
    border:1px solid ${({ theme }) => theme.aux};

  }

  .button {
    background: transparent;
  }
  
  .fileLabel > svg, .button > svg  {
    stroke: ${({ theme }) => theme.main} !important;
    fill: ${({ theme }) => theme.main}!important;
  }

  /***** message colors ******/
  .messageBox {
    background:  ${({ theme }) => theme.messageBox};
    color:  ${({ theme }) => theme.message};
  }
  
  .sentText {
    color:  ${({ theme }) => theme.main};
  }

  .userMessage{
    background: ${({ theme }) => theme.userMessageBg};
    box-shadow: .3em .3em .5em ${({ theme }) => theme.messageShadow};
  }

  .userMessage > .messageText {
    color: ${({ theme }) => theme.white}
  }
  
  .otherMessage {
    background: ${({ theme }) => theme.otherMessageBg};
    box-shadow: .3em .3em .5em ${({ theme }) => theme.messageShadow};
  }

  .otherMessage > .messageText {
    color: ${({ theme }) => theme.otherMessage}
  }
    
  .systemMessage {
    background: ${({ theme }) => theme.systemMsgBg};
    box-shadow: .3em .3em .5em ${({ theme }) => theme.messageShadow};
  }

  .systemMessage > .messageText {
    color: ${({ theme }) => theme.text}
  }

  .time{
    color: ${({ theme }) => theme.main};
  }

  .tab{
    color: ${({ theme }) => theme.white};
  }

  .tab.active {
    border-bottom: 1px solid ${({ theme }) => theme.main};
    color: ${({ theme }) => theme.main};
  }
  

/
  `;
