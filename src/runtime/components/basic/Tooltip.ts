import { useElementBounding } from '@vueuse/core';
import {
  Teleport,
  Transition,
  computed,
  defineComponent,
  h,
  ref,
  type HTMLAttributes,
  type PropType,
  type SlotsType,
} from 'vue';

export default /*#__PURE__*/ defineComponent({
  name: 'Tooltip',

  props: {
    custom: Boolean,
    as: { type: String, default: 'div' },
    separation: { type: Number, default: 12 },
    position: { type: String as PropType<'top' | 'bottom' | 'left' | 'right'>, default: 'top' },
  },

  slots: Object as SlotsType<{ default: any; tooltip: any }>,

  setup(props, { slots, expose, attrs }) {
    const tooltip = ref<HTMLElement | null>(null);
    const wrapper = ref<HTMLElement | null>(null);

    const { width: tW, height: tH } = useElementBounding(tooltip);
    const { x: wX, y: wY, width: wW, height: wH, update: updateWrapperPos } = useElementBounding(wrapper);

    const showTip = ref(false);

    const tooltipPosition = computed<HTMLAttributes['style']>(() => {
      if (!wrapper.value || !tooltip.value) return { top: '0', left: '0' };

      const commonY = { left: `${wX.value + wW.value / 2 - tW.value / 2}px` };
      const commonX = { top: `${wY.value + wH.value / 2 - tH.value / 2}px` };

      if (props.position === 'bottom')
        return { ...commonY, top: `${wY.value + wH.value + props.separation}px` };
      if (props.position === 'left')
        return { ...commonX, left: `${wX.value - tW.value - props.separation}px` };
      if (props.position === 'right')
        return { ...commonX, left: `${wX.value + wW.value + props.separation}px` };
      return { ...commonY, top: `${wY.value - tH.value - props.separation}px` };
    });

    expose({ updateWrapperPos });

    return () => [
      h(
        props.as,
        {
          ...attrs,
          ref: wrapper,
          onMouseover() {
            showTip.value = true;
          },
          onMouseleave() {
            showTip.value = false;
          },
        },
        slots.default && slots.default()
      ),

      slots.tooltip &&
        h(Teleport, { to: 'body' }, [
          h(
            Transition,
            {
              enterFromClass:
                props.position === 'right'
                  ? 'opacity-0 -translate-x-1'
                  : props.position === 'left'
                  ? 'opacity-0 translate-x-1'
                  : props.position === 'top'
                  ? 'opacity-0 translate-y-1'
                  : 'opacity-0 -translate-y-1',
              enterToClass:
                props.position === 'left' || props.position === 'right'
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-100 translate-y-0',
              leaveFromClass:
                props.position === 'left' || props.position === 'right'
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-100 translate-y-0',
              leaveToClass:
                props.position === 'right'
                  ? 'opacity-0 -translate-x-1'
                  : props.position === 'left'
                  ? 'opacity-0 translate-x-1'
                  : props.position === 'top'
                  ? 'opacity-0 translate-y-1'
                  : 'opacity-0 -translate-y-1',
              enterActiveClass: 'transition-[opacity,transform] duration-75',
              leaveActiveClass: 'transition-[opacity,transform] duration-100',
            },
            () =>
              showTip.value &&
              h(
                'div',
                {
                  ref: tooltip,
                  style: tooltipPosition.value,
                  class: `pointer-events-none fixed z-50 ${
                    !props.custom
                      ? 'w-max max-w-[10rem] rounded-md bg-gray-600 px-2 py-1 text-center text-xs text-white'
                      : ''
                  }`,
                },
                slots.tooltip!()
              )
          ),
        ]),
    ];
  },
});
