import React from "react";

const TodoPage = () => {
  const dummy_todos = [
    {
      id: 0,
      description: "WYSADZIĆ SIE",
      deadlineDate: new Date(),
      tags: ["IMPORTANT", "#ZAPIERDOL"],
      contributors: ["Binczor", "Olgierd", "Oskar", "Marcin", "Rychu", "Tytus"],
    },
    {
      id: 1,
      description: "second dummy todo",
      deadlineDate: new Date(),
      tags: ["na luzie"],
      contributors: ["Binczor", "Olgierd"],
    },
    {
      id: 2,
      description: "kutas kozla",
      deadlineDate: new Date(),
      tags: ["nie do przebicia"],
      contributors: ["Binczor", "Olgierd"],
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="mx-auto">JEBANE TODOSY NA RAZIE ZHARDCODE'OWANE</div>
      {/* TODO LIST */}
      <div className="bg-[#1e293b66] p-2 rounded-md flex flex-col gap-3">
        {dummy_todos.map((todo) => {
          const { description, tags, contributors } = todo;

          return (
            <div
              key={todo.id}
              className="bg-slate-800 rounded-md p-2 relative overflow-hidden"
            >
              {/* DESCRIPITON */}
              <p>{description}</p>

              <div className="w-full h-1 bg-[#192231] mt-[3px] rounded-full"></div>

              {/* TAGS */}
              <div className="flex gap-2 flex-wrap mt-2">
                {tags.map((tag, index) => (
                  <div
                    key={index}
                    className="font-bold rounded-md p-1 px-2 bg-cyan-900 w-fit"
                  >
                    {tag}
                  </div>
                ))}
              </div>

              {/* CONTRIBUTORS */}
              <div className="flex gap-2 flex-wrap mt-2">
                {contributors.map((contributor, index) => (
                  <div
                    key={index}
                    className="font-bold rounded-md p-1 bg-slate-900 w-fit"
                  >
                    {contributor}
                  </div>
                ))}
              </div>

              {Array.from([...Array(70).keys()]).map((item, index) => (
                <div
                  className="absolute w-[10px] animate-bounce flame -bottom-4 rounded-md"
                  style={{
                    backgroundColor: `rgb(${Math.round(
                      Math.random() * 255
                    )}, 55, 77)`,
                    height: Math.round(Math.random() * 30) + 20,
                    left: index * 5,
                    opacity: 0.9,
                    animationDelay: `${0.1 * index}s`
                  }}
                />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoPage;
