import axios from "axios";
export const sendQuestion = async (formData) => {
  try {
    const option = [formData['option1'], formData['option2'], formData['option3'], formData['option4'] ];
    const {option1, option2, option3, option4, ...rest} = formData;
    const data = {...rest, option: [...option]};
    const key = formData['subject'];
    const finalData = {data, key}
    const newformdata = {
        data:{
            category:formData.category,
            explanation:formData.explanation,
            description:formData.description,
            correct:formData.answer,
            options:option
        },
        key:key
    }
    console.log("data >>>>>>>>>>>>>>>>", finalData);
    console.log(newformdata);
    const question = await axios.post('http://localhost:8082/mcq', newformdata);
    return question;
  } catch (error) {
    throw error;
  }
};
