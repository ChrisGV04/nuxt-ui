import { defineComponent, h, type SlotsType } from 'vue';

export default defineComponent({
  name: 'HighlightText',

  props: {
    as: { type: String, default: 'span' },
    text: { type: String, required: true },
    finderRegex: { type: RegExp, default: /\[(.*?)\]/g },
  },

  slots: Object as SlotsType<{ highlights: { content: string } }>,

  setup(props, { slots, attrs }) {
    const text = props.text.toString();
    const split = text.split(props.finderRegex); // Split all of the brackets. Each 2n element must be highligthed

    const formatted = split.map((content, index) => {
      const isHighlight = (index + 1) % 2 === 0;
      if (!isHighlight) return content;
      if (slots.highlights) return slots.highlights({ content });
      return h('span', { class: 'highlight' }, content);
    });

    return () => h(props.as, { ...attrs }, formatted);
  },
});
