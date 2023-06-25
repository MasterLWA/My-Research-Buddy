import React, { useState, useEffect } from "react";
import { Configuration, OpenAIApi } from "openai";
import "../../Style/Home.css";
import Spinner from "../../common/Loading/Spinner"

const AiAssisst = () => {
  const [topic, setTopic] = useState("");
  const [quation, setQuation] = useState("");
  const [result, setResult] = useState(""); 
  const [prompt, setPrompt] = useState(""); 
  const [isLoading, setIsLoading] = useState(false); // New state for loading

  //create promt
  useEffect(() => {
    setPrompt("You are "+ topic + " expert. " + quation + " " + topic);
  }, [quation, topic]);
  //end

  // Function to work with OpenAI API
  const generate = async () => {
    setResult(""); // Reset the result
    setIsLoading(true); // Set loading state to true

    console.log("Prompt: ", prompt);

    try {
      const configuration = new Configuration({
        apiKey: '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',
      });
      const openai = new OpenAIApi(configuration);
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 300,
        temperature: 0.1,
      });
      const result = response.data.choices[0].text.trim();
      setResult(result);
      console.log("Response from OpenAI: ", result);
    } catch (error) {
      console.error("Error getting information from OpenAI:", error);
    } finally {
      setIsLoading(false); // Set loading state to false after data retrieval
    }
  };
  //end 

  return (
    <div className="home container">
      <div className="text-center" id="moto">
        Make your Research Unreachable
      </div>

      <div
        id="form"
        className="text-center container d-flex justify-content-center align-items-center text-center"
      >
        <form>
          <input
            type="text"
            placeholder="Enter your Research topic"
            id="topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
          <br />
          <select
            id="quationselect"
            type="text"
            placeholder="Select"
            value={quation}
            onChange={(e) => setQuation(e.target.value)}
          >
            {/*Section input for what user want*/}=
            <option value="">Select</option>
            <option value="Explain about">Explain Topic</option>
            <option value="How to do research about">How to Do?</option>
            <option value="Give Some preview Research papers related to">Research Papers</option>
            <option value="What are the advantages of doing research about">Advantages</option>
            <option value="What are the disadvantages doing research about">Disadvantages</option>
            <option value="What are the applications that I can build related to research about">Applications</option>
          </select>
            {/*End of Selection*/}
          <br />
          <button onClick={generate} id="Gbtn" type="button">
            Generate
          </button>
        </form>
      </div>

      <div className="container" id="result">
        {isLoading ? (
          <Spinner /> // Display the spinner when isLoading is true
        ) : (
          result && <div className="container text-center">{result}</div>
        )}
      </div>
    </div>
  );
};

export default AiAssisst;
