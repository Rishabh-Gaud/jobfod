"use client";
import DOMPurify from "dompurify";
import React, { useState } from "react";
import classes from "../styles/form.module.css";
import { sendQuestion } from "../utils/sendQuestion";

const DetailForm = () => {
  const [formData, setFormData] = useState({
    category: "",
    subject: "",
    description: "",
    explanation: "",
    answer: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
  });
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const createHTML = (textInput) => {
    const sanitizedHTML = DOMPurify.sanitize(textInput);
    return sanitizedHTML;
  };
  const handleChange = (event) => {
    const value = createHTML(event.target.value);
    setFormData({ ...formData, [event.target.name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    sendQuestion(formData);
    setFormData({
      category: "",
      subject: "",
      description: "",
      explanation: "",
      answer: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
    });
  };
  return (
    <form
      className="block w-[50%] m-4 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700  justify-center items-center"
      onSubmit={submitHandler}
    >
      <div className={`${classes.form__group} my-2`}>
        <label htmlFor="subjectDropdown" className="text-gray-300">
          Subject{" "}
        </label>
        <select
          name="subject"
          id="subjectDropdown"
          value={formData.subject}
          onChange={handleChange}
          className="bg-gray-400 ml-2"
        >
          <option value="">Select</option>
          <option value="cpp">cpp</option>
          <option value="sriram">test</option>
          <option value="cprogramming">c programming</option>
          <option value="arithmaticaptitude">arithmatic aptitude</option>
          <option value="datainterpretation">data interpretation</option>
          <option value="logicalreasoning">logical reasoning</option>
          <option value="nonverbalreasoning">non verbal reasoning</option>
          <option value="verbalreasoning">verbal reasoning</option>
          <option value="verbalability">verbal ability</option>
        </select>
      </div>
      <div className={`${classes.form__group}`}>
        <textarea
          type="text"
          rows={1}
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="category"
          required
        />
      </div>
      <div className={`${classes.form__group}`}>
        <textarea
          type="text"
          rows={5}
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          required
        />
      </div>
      <div className={`${classes.form__group}`}>
        <textarea
          type="text"
          rows={3}
          name="option1"
          value={formData.option1}
          onChange={handleChange}
          placeholder="option1"
          required
        />
      </div>
      <div className={`${classes.form__group}`}>
        <textarea
          type="text"
          rows={3}
          name="option2"
          value={formData.option2}
          onChange={handleChange}
          placeholder="option2"
          required
        />
      </div>
      <div className={`${classes.form__group}`}>
        <textarea
          type="text"
          rows={3}
          name="option3"
          value={formData.option3}
          onChange={handleChange}
          placeholder="option3"
          required
        />
      </div>
      <div className={`${classes.form__group}`}>
        <textarea
          type="text"
          rows={3}
          name="option4"
          value={formData.option4}
          onChange={handleChange}
          placeholder="option4"
          required
        />
      </div>
      <div className={`${classes.form__group}`}>
        <textarea
          type="text"
          rows={1}
          name="answer"
          value={formData.answer}
          onChange={handleChange}
          placeholder="answer"
          required
        />
      </div>

      <div className={`${classes.form__group}`}>
        <textarea
          type="text"
          rows={5}
          name="explanation"
          value={formData.explanation}
          onChange={handleChange}
          placeholder="Explanation"
          required
        />
      </div>

      <button
        type="submit"
        class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded text-sm px-2 py-2 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Send
      </button>
    </form>
  );
};

export default DetailForm;
