import ButtonFill from "@/components/button/ButtonFill";
import ButtonStorke from "@/components/button/ButtonStroke";
import { Flex } from "@/components/styles/Flex.styled";
import { H1 } from "@/components/styles/H1.styled";
import { H2 } from "@/components/styles/H2.styled";
import { H3 } from "@/components/styles/H3.styled";
import { StyledTodoItem } from "@/components/styles/TodoItem.styled";
import { todosMachine } from "@/machines/todoAppMachine";
import { useMachine } from "@xstate/react";
import { BiLinkExternal } from "react-icons/bi";

type Props = {};
const todos = new Set<string>(["Buy milk", "Buy eggs", "Buy bread"]);

const XStateDemo = (props: Props) => {
  const [state, send] = useMachine(todosMachine, {
    services: {
      loadTodos: async () => {
        return Array.from(todos);
      },
      saveTodo: async (context, event) => {
        todos.add(context.createNewTodoFormInput);
      },
      deleteTodo: async (context, event) => {
        todos.delete(event.todo);
      },
    },
  });

  return (
    <div className="p-10">

      <Flex>
        <H1>
          XState Todo
        </H1>
      </Flex>

      <Flex className="py-4 justify-between flex-grow items-end"> {/* Add items-baseline class for alignment */}
        <div>
          <a href="https://github.com/pangsitmie/Websites/tree/main/jeriel-portfolio-vite-ts">
            <h4 className="align-center mb-4 flex gap-2 text-xl text-primary-100">
              Github <BiLinkExternal />
            </h4>
          </a>
          <pre>STATE VALUE: {JSON.stringify(state.value)}</pre>
          <pre>STATE CONTEXT: {JSON.stringify(state.context)}</pre>
        </div>

        {/* if todo has been loaded */}
        {state.matches("Todos Loaded") && (
          <ButtonFill
            text="Create new"
            onClick={() => {
              send({
                type: "Create new",
              });
            }}
          />
        )}
      </Flex>

      {state.matches("Todos Loaded") && (
        <div className="border border-white border-solid border-1 rounded-md p-4">
          {state.context.todos.map((todo) => (
            <StyledTodoItem
              key={todo}
            >
              <p className="text-white">{todo}</p>
              <ButtonStorke
                text="X"
                onClick={() => {
                  send({
                    type: "Delete",
                    todo,
                  });
                }}
              />

            </StyledTodoItem>
          ))}
        </div>
      )}






      {state.matches("Deleting todo errored") && (
        <>
          <p>Something went wrong: {state.context.errorMessage}</p>
          <button
            onClick={() => {
              send({
                type: "Speed up",
              });
            }}
          >
            Go back to list
          </button>
        </>
      )}


      {state.matches("Creating new todo.Showing form input") && (
        <div className="flex items-center gap-10">
          <H3 className="">
            Add New:
          </H3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send({
                type: "Submit",
              });
            }}
          >
            <input
              className="border border-white border-solid border-1 rounded-md p-4 bg-transparent text-white"
              onChange={(e) => {
                send({
                  type: "Form input changed",
                  value: e.target.value,
                });
              }}
            ></input>
          </form>
        </div>
      )}

    </div>
  );
};

export default XStateDemo;
