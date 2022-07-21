declare namespace _default {
    function operator(): {
        label: string;
        onconnect: (device: any) => void;
        ondisconnect: (device: any) => Promise<boolean>;
        ondata: (channels: any) => any;
        protocols: any[];
    };
}
export default _default;
