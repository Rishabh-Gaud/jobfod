"use client";
import Header from "@/components/Header";
import React, { useState, useEffect } from "react";
import axios from "axios";
import * as XLSX from "xlsx";
const Jobs = ({ params }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        // Fetch Excel file
        const response = await axios.get(
          "https://docs.google.com/spreadsheets/d/127qRQxguf2XCeJ6whKxPaFtYEaqk5tY3Ogf2H64Qt90/export?format=xlsx",
          { responseType: "arraybuffer" },
        );

        // Parse Excel data
        const workbook = await XLSX.read(response.data, { type: "buffer" });
        const sheetName = await workbook.SheetNames[0];
        const sheet = await workbook.Sheets[sheetName];
        const jsonData = await XLSX.utils.sheet_to_json(sheet, { header: 1 });
        await setData(jsonData[params["job"]]);
        return data;
      } catch (error) {
        console.error("Error fetching or reading Excel file:", error);
        return error;
      }
    }
    getData();
  }, []);

  return (
    <>
      <Header />
      <div className="bg-gray-100 min-h-screen py-8 px-4 sm:px-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-800">{data[0]}</h1>
          <p className="mt-2 text-gray-600">{data[1]}</p>
        </div>

        <section className="prose max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold">
            Online job interviews: Here are some tips and tricks on how to crack
            it
          </h2>
          <ul className="list-disc mt-4 ml-6">
            <li className="font-bold">
              Online interviews have become the only way to hire new employees
              as the majority of organisations have adopted the digital
              infrastructure.
            </li>
            <li className="font-bold">
              The candidates should prepare some common questions with ready
              answers to avoid the last minute brainstorming.
            </li>
            <li className="font-bold">
              For online interviews, having a clean and clutter-free background
              holds prime importance in showing the level of professionalism of
              the candidate.
            </li>
          </ul>
        </section>

        <section className="prose max-w-3xl mx-auto">
          <div className="my-5">
            <p>
              As more and more organisations are transitioning to work-from-home
              or hybrid workforce models, conducting online interviews has
              become the only way to hire new employees.
            </p>
          </div>
          <div className="my-5">
            <p>
              Since the majority of organisations have adopted the digital
              infrastructure, it is understood that the initial rounds or the
              entire interview process will likely take place online.
            </p>
          </div>
          <div className="my-5">
            <p>
              These are some important aspects and tips to ace the online
              interview process,
            </p>
          </div>
          <ul className="list-decimal mt-4 ml-6">
            <li className="font-bold">
              Prepare thoroughly and dress up nicely
            </li>
            <li className="font-bold">Check your background</li>
            <li className="font-bold">Tech check</li>
            <li className="font-bold">First impressions</li>
            <li className="font-bold">Look focused</li>
            <li className="font-bold">Avoid showing your emotions</li>
            <li className="font-bold">Keep a pen and paper handy</li>
          </ul>
          <br></br>
          <div>
            {" "}
            <a className="text-2xl font-bold text-pink-400" href={data[2]}>
              click here to apply
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default Jobs;