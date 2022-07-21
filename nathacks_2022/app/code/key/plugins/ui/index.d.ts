export default ui;
declare const ui: {
    button: {
        operator: () => HTMLButtonElement;
        element: HTMLButtonElement;
        innerHTML: string;
        style: {};
    };
    data: {
        operator: (input: any) => HTMLDivElement;
        element: HTMLDivElement;
        style: {
            background: string;
            width: string;
            height: string;
        };
    };
    ".brainsatplay": {
        package: any;
        graph: any;
        plugins: any;
    };
};
