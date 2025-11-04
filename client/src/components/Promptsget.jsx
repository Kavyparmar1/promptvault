import axios from "axios";
import React, { useEffect, useState } from "react";

const Promtsget = () => {
  const [catagory, setcatagory] = useState("");
  const [loading, setloading] = useState(false);
  const [prompts, setPrompts] = useState([]);

  useEffect(() => {
    const fetchPrompts = async () => {
      if (!catagory || loading) return;
      setloading(true);

      try {
        let url = "";

        if (catagory === "personal") {
          url = "http://localhost:3000/api/prompt/me";
        } else if (catagory === "community") {
          url = "http://localhost:3000/api/prompt/";
        }

        const res = await axios.get(url, { withCredentials: true });
        console.log(`✅ ${catagory.toUpperCase()} RESPONSE:`, res.data);

        // 🧩 Extract safely based on known keys
        let data = [];

        if (catagory === "personal") {
          // res.data.prompt may be an array or single object
          const personalData = res.data.prompt;
          data = Array.isArray(personalData)
            ? personalData
            : personalData
            ? [personalData]
            : [];
        }

        if (catagory === "community") {
          // res.data.allPrompts is array
          const communityData = res.data.allPrompt;
          data = Array.isArray(communityData)
            ? communityData
            : communityData
            ? [communityData]
            : [];
        }

        setPrompts(data);
        
        
      } catch (error) {
        console.error(error);
        alert(error.response?.data?.message || "Something went wrong!");
      } finally {
        setloading(false);
      }
    };

    fetchPrompts();
  }, [catagory]);

  return (
    <>
      {/* Header Section */}
      <div className="h-20 fixed w-[80%] bg-[#FFFFFF] flex items-center justify-between px-20 shadow-sm z-10">
        <div>
          <select
            value={catagory}
            onChange={(e) => setcatagory(e.target.value)}
            className="border-2 border-[#737373] rounded-xl px-5 py-2 text-l font-[dashFont] outline-none"
          >
            <option value="" disabled>
              Select category
            </option>
            <option value="personal">Personal</option>
            <option value="community">Community</option>
          </select>
        </div>

        <div>
          <button
            disabled={loading}
            className={`px-5 py-2 rounded bg-blue-500 text-white transition-all ${
              loading ? "opacity-60 cursor-not-allowed" : "hover:bg-blue-600"
            }`}
          >
            {loading ? "Loading..." : "Add Prompt"}
          </button>
        </div>
      </div>

      {/* Prompts Section */}
      <div className="mt-28 px-20 pb-10">
        {/* Category heading */}
        {catagory && (
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            {catagory === "personal"
              ? "👤 Your Personal Prompts"
              : "🌍 Community Prompts"}
          </h2>
        )}

        {loading && (
          <p className="text-gray-500 text-center mt-10">Loading prompts...</p>
        )}

        {!loading && (!prompts || prompts.length === 0) && catagory && (
          <p className="text-gray-400 text-center mt-10">
            No prompts found for {catagory} category.
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {Array.isArray(prompts) &&
            prompts.map((item, idx) => (
              <div
                key={item._id || idx}
                className="border border-gray-300 rounded-xl p-5 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-xl font-semibold">
                    {item?.title || "Untitled Prompt"}
                  </h2>
                  <span
                    className={`px-2 py-1 rounded text-xs font-semibold ${
                      catagory === "personal"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {catagory}
                  </span>
                </div>

                <p className="text-gray-700 mb-3">
                  {item?.prompt || "No prompt text available"}
                </p>

                <div className="flex justify-between text-sm text-gray-500">
                  <span>🧑‍💻 {item?.authorName || "Anonymous"}</span>
                  <span>🏷️ {item?.tags || "General"}</span>
                </div>

                <p className="text-xs text-gray-400 mt-2">
                  Created:{" "}
                  {item?.createdAt
                    ? new Date(item.createdAt).toLocaleDateString()
                    : "N/A"}
                </p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Promtsget;
