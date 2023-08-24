import ButtonFill from "@/components/button/ButtonFill";
import ButtonStorke from "@/components/button/ButtonStroke";
import { Container } from "@/components/styles/container/Container.styled";
import { Flex } from "@/components/styles/Flex.styled";
import { StyledTodoItem } from "@/components/styles/TodoItem.styled";
import { H1, H3 } from "@/components/styles/typography/typography.styled";
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
    <div className="h-full pt-24 px-10">
      <Flex>
        <H1>
          XState Demo
        </H1>
      </Flex>

      <Flex className="py-4 justify-between flex-grow items-end"> {/* Add items-baseline class for alignment */}
        <div className="">
          <a href="https://github.com/pangsitmie/Websites/tree/main/jeriel-portfolio-vite-ts/src/pages/xStateDemo">
            <h4 className="align-center mb-4 flex gap-2 text-xl text-primary-100">
              Github <BiLinkExternal />
            </h4>
          </a>
          <p style={{ wordBreak: 'break-word', maxWidth: '100vw' }}>
            STATE VALUE: {JSON.stringify(state.value)}
          </p>
          <br />
          <p style={{ wordBreak: 'break-word', maxWidth: '100vw' }}>
            STATE CONTEXT: {JSON.stringify(state.context)}
          </p>
        </div>

        {/* if todo has been loaded */}

      </Flex>

      {state.matches("Todos Loaded") && (
        <div className="border border-white border-solid border-1 rounded-md p-6">
          <div className="mb-4">
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

          {state.matches("Todos Loaded") && (
            <ButtonFill
              className=""
              text="Add new"
              onClick={() => {
                send({
                  type: "Create new",
                });
              }}
            />
          )}
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
