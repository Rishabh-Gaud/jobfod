import axios from "axios";
export const sendQuestion = async (formData) => {
  try {
    const option = [formData['option1'], formData['option2'], formData['option3'], formData['option4'] ];
    const {option1, option2, option3, option4, ...rest} = formData;
    const data = {...rest, option: [...option]};
    const key = formData['subject'];
    const finalData = {data, key}
    console.log("data >>>>>>>>>>>>>>>>", finalData);
    const question = await axios.post('localhost:8082/mcq', finalData);
    return question;
  } catch (error) {
    throw error;
  }
};
