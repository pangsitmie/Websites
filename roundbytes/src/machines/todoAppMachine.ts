import { createMachine, assign } from "xstate";

export const todosMachine =
    createMachine(
        {
            /** @xstate-layout N4IgpgJg5mDOIC5QBUD2FUAIC2BDAxgBYCWAdmAHQAyquEZUmaGsAxBuRWQG6oDWlZljxEylGnQZN0qWAh6p8uAC7FUpANoAGALradiUAAdZxVesMgAHogBMAVlsV7AdgAcARgDMANnveXewAWFyCAGhAAT0R-JxdbHx8ATlsXFySXLyC3AF8ciKEcAhJOCXpSRiE2DkoFAQpCkRLxWnLKmTkFJXNNXQ0PAyQQE1gzNVJLGwQfWwjohA9goOctTyDbDx93Nzd7PIKZItFS1qkq1jAAJ0vUS4ojABsVADNb7AbDprFqU4rpFnkpF43XG+n0lhGYwsQymDicrk8vn8XkCIXCUUQ6RcFA86TcQVWQUWmyS+xAjWK3yqmDKkFYAGFLmAVGBMOQAO7goaQnqTRBuWYYhZBII+FZuLQhJJuLzS3FkinHQQdGmtOkAETADzAyjAXOMpl5MMQKTmiG8STFWlWWi8stsWh8XnxCs+lM4jOZqj+HMwyhkFAAyoRUOypK9LthMGQjABXZSsABib2jpDjykwRFwFUg+uGhvGfIQKKSFFtSUlIs8-nsSS8ZuF7gogQl9nsWkWfjtrowR2aFE9Kikvv9GCDIbDfwjUZj8dYgdjACNsGY8zzC8bplpS5a3GlcTWMj4G4s982kkFXFoHBfZXt8uS3UqB0yhz6wOy-QHA7huFJR6g7DqLUQL8MqvZfB6r7eowI7fr+-4yICwJDuoYK6BCBbQqAsLrM47jeH4ATBKEDaWk4zq2BeOxBF4HYuB4PbCO6lCDjBbIfl+Y4-n+fwARc1y3PcTzKNOHwQSxL5esOnEAUGCF8UhXSob0egYdyWETJuPjbhQu77oEixHieQQXhQWQeOsGxHq4XhMX23yatq7H8TUXCgfUir9k5OqIRgyGKCp6GDAaoxGjhmKCvMlkZGWNozJKmQOPZkGUD5LkyAJNx3I8LxvOJzHPulfmoAFIJoX06mhVCWkRQgDj2HpPh7j4pkEtuWj2A2ngrNatiXq1dZbPeBwSUVWq+YpvZXNldKBkYYCQJgsZGGumlFg1TUtW11oVl1QqpB4FC2AkWx7pssreCNj5jd5E0ZdNglMhArBWLAygshQuDPLqlwABQONaACUrBeY590lZgM23LmVX5mFG51Zt+mDe1e0NidXjNgkta7Ek9gCu4th5A+pDoHAlhg+QmEI9h1iIAAtMeQpMylkllGcHQ0zVRbrA2XYUOs0p0SkoQdqSD5U+BsiqnQkDc+F9MIPYzoUBKor4n4WLM-Mth2hQOmbLWKtaGkKI+Gzz4c1NMvQ89CuI0rl7Ym4FaJOsHWOBe3UeKWnYDTMuK+HZktPv2bEyZ+AEO3TUx2kd5aVtkxK1vWQoWkdDgSnRl6m5sLiW+H0GR1xqDjqG4YprOygx7VSuymKEqm0kvueJ4To6+aBNaMdHgeHrl4Chs9gW6Ht3fBH75R-BvGMNHGm03XUzVsdnhUReGv424J5tkdKLuBkBIj-111SxQxU27XG3tmWA997sqwHlF5qpI1Ox0bYrtOt3Bdj4Vd3OUhnbeWC8eabj5gdB0x1Trq06rRdwIc8hAA */
            context: {
                todos: [] as string[],
                errorMessage: undefined as string | undefined,
                createNewTodoFormInput: "",
            },
            tsTypes: {} as import("./todoAppMachine.typegen").Typegen0,
            schema: {
                services: {} as {
                    loadTodos: {
                        data: string[];
                    };
                    saveTodo: {
                        data: void;
                    };
                    deleteTodo: {
                        data: void;
                    };
                },
                events: {} as
                    | {
                        type: "Create new";
                    }
                    | {
                        type: "Form input changed";
                        value: string;
                    }
                    | {
                        type: "Submit";
                    }
                    | {
                        type: "Delete";
                        todo: string;
                    }
                    | {
                        type: "Speed up";
                    },
            },
            id: "Todo machine",
            initial: "Loading Todos",
            states: {
                "Loading Todos": {
                    invoke: {
                        src: "loadTodos",
                        onDone: [
                            {
                                actions: "assignTodosToContext",
                                cond: "Has todos",
                                target: "Todos Loaded",
                            },
                            {
                                target: "Creating new todo",
                            },
                        ],
                        onError: [
                            {
                                actions: "assignErrorToContext",
                                target: "Loading todos errored",
                            },
                        ],
                    },
                },
                "Todos Loaded": {
                    on: {
                        "Create new": {
                            target: "Creating new todo",
                        },
                        Delete: {
                            target: "Deleting todo",
                        },
                    },
                },
                "Loading todos errored": {},
                "Creating new todo": {
                    initial: "Showing form input",
                    states: {
                        "Showing form input": {
                            on: {
                                "Form input changed": {
                                    actions: "assignFormInputToContext",
                                },
                                Submit: {
                                    target: "Saving todo",
                                },
                            },
                        },
                        "Saving todo": {
                            invoke: {
                                src: "saveTodo",
                                onDone: [
                                    {
                                        target: "#Todo machine.Loading Todos",
                                    },
                                ],
                                onError: [
                                    {
                                        actions: "assignErrorToContext",
                                        target: "Showing form input",
                                    },
                                ],
                            },
                        },
                    },
                },
                "Deleting todo": {
                    invoke: {
                        src: "deleteTodo",
                        onDone: [
                            {
                                target: "Loading Todos",
                            },
                        ],
                        onError: [
                            {
                                actions: "assignErrorToContext",
                                target: "Deleting todo errored",
                            },
                        ],
                    },
                },
                "Deleting todo errored": {
                    after: {
                        "2500": {
                            target: "Todos Loaded",
                        },
                    },
                    on: {
                        "Speed up": {
                            target: "Todos Loaded",
                        },
                    },
                },
            },
        },
        {
            guards: {
                "Has todos": (context, event) => {
                    return event.data.length > 0;
                },
            },
            actions: {
                assignTodosToContext: assign((context, event) => {
                    return {
                        todos: event.data,
                    };
                }),
                assignErrorToContext: assign((context, event) => {
                    return {
                        errorMessage: (event.data as Error).message,
                    };
                }),
                assignFormInputToContext: assign((context, event) => {
                    return {
                        createNewTodoFormInput: event.value,
                    };
                }),
            },
        },
    );