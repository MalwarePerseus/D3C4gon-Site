import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

const TyperEff = () => {
    return(
        <ReactTypingEffect className="mainhead ml-5"
                    text={[ "Hey There!", "We are Creative.", "We Love to Hack.", "We are Hunters.","We are Smexy.","We are D3C4gon."]}
                    cursorRenderer={cursor => <h1>{cursor}</h1>}
                    speed = {80}
                    typingDelay = {1000}
                    eraseDelay = {2500}
                    eraseSpeed = {50}
                    displayTextRenderer={(text, i) => {
                      return (
                        <h1>
                          {text.split('').map((char, i) => {
                            const key = `${i}`;
                            return (
                              <span
                                key={key}
                                style={i%2 === 0 ? { color: 'white'} : {}}
                              >{char}</span>
                            );
                          })}
                        </h1>
                      );
                    }}        
                  />
    );
};

export default TyperEff;