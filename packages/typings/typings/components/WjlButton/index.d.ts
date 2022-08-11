import _WjlButton from './WjlButton.vue';
declare const WjlButton: import("../../utils").WithInstall<import("vue").DefineComponent<{
    type: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    size: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    msg: {
        type: StringConstructor;
        required: false;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    size: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    msg: {
        type: StringConstructor;
        required: false;
        default: string;
    };
}>>, {
    type: string;
    size: string;
    msg: string;
}>>;
export default WjlButton;
export { WjlButton };
declare module 'vue' {
    interface GlobalComponents {
        WjlButton: typeof _WjlButton;
    }
}
