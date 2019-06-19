<template>
  <div class="md-rating-bar" :class="[$mdActiveTheme]" :disabled="disabled">
    <div class="md-rating-bar-icons md-empty-icons">
      <i v-for="i in mdMaxValue"
         :key="i"
         @mouseover="hoverStars"
         @click="clickStars"
         @mouseout="onMouseOut"
         class="md-icon md-icon-font"
         :class="[iconClasses]"
      >{{ mdEmptyIcon }}</i>
    </div>

    <div class="md-rating-bar-icons md-full-icons" :style="fullIconStyle">
      <i v-for="i in mdMaxValue"
         :key="i"
         @mouseover="hoverStars"
         @click="clickStars"
         @mouseout="onMouseOut"
         class="md-icon md-icon-font"
         :class="[iconClasses]"
      >{{ mdFullIcon }}</i>
    </div>
  </div>
</template>

<script>
import MdTheme from 'core/MdTheme'
let iconSize = 24 // size of each icon from rating bar in pixels

export default {
  name: 'MdRatingBar',
  props: {
    mdTheme: null,
    mdMaxValue: {
      type: Number,
      default: 5
    },
    disabled: Boolean,
    value: {
      type: Number,
      default: 0
    },
    mdIconSize: {
      type: Number,
      default: 1
    },
    mdFullIcon: {
      type: String,
      default: 'star'
    },
    mdEmptyIcon: {
      type: String,
      default: 'star'
    }
  },
  // mixins: [theme],
  data () {
    return {
      rating: this.value
    }
  },
  computed: {
    iconClasses () {
      let classes = {}
      if (this.mdIconSize) {
        classes[`md-size-${this.mdIconSize}x`] = true
      }
      classes[this.$mdActiveTheme] = true
      return classes
    },
    fullIconStyle () {
      return {
        width: 100 / this.mdMaxValue * this.rating + '%',
        'margin-left': -iconSize * this.mdIconSize * this.mdMaxValue + 'px'
      }
    },
    $mdActiveTheme () {
      const { enabled, getThemeName, getAncestorTheme } = MdTheme

      if (enabled && this.mdTheme !== false) {
        return getThemeName(this.mdTheme || getAncestorTheme(this))
      }

      return null
    }
  },
  watch: {
    value () {
      this.rating = this.value
    }
  },
  methods: {
    hoverStars (evt) {
      if (!this.disabled) {
        this.rating = this.getIconIndex(evt.currentTarget)
        this.$emit('hover', this.rating)
      }
    },
    clickStars (evt) {
      if (!this.disabled) {
        let selected = this.getIconIndex(evt.currentTarget)
        this.$emit('input', selected)
        this.$emit('change', selected)
      }
    },
    getIconIndex (iconSelected) { // iconSelected is a dom element
      let ratingIcons = this.$el.querySelectorAll('.md-empty-icons > .md-icon, .md-full-icons > .md-icon')
      let selected = -1

      ratingIcons = Array.prototype.slice.call(ratingIcons)
      // find index from iconSelected
      ratingIcons.some((icon, i) => {
        if (icon === iconSelected) {
          selected = (i + 1) % this.mdMaxValue
          selected = !selected ? this.mdMaxValue : selected
          return true
        }
      })

      return selected
    },
    onMouseOut () {
      this.rating = this.value
    }
  }
}
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";
  @import "~components/mdIcon/mixins";

  $icon-size: 24px;

  .md-rating-bar {
    display: flex;
    width: fit-content;
    padding: 3px;
    border-radius: 2px;

    > .md-full-icons {
      overflow-x: hidden;
      display: inherit;
    }

    > .md-rating-bar-icons {
      > .md-icon {
        @include md-icon-size($icon-size);
        margin: 0;
        cursor: pointer;
        display: inline-flex;
        user-select: none;
        align-items: center;
        justify-content: center;
        vertical-align: middle;
        transition: color .4s $md-transition-default-timing;
        direction: ltr;
        font-family: "Material Icons";
        font-feature-settings: "liga";
        font-style: normal;
        letter-spacing: normal;
        line-height: 1;
        text-rendering: optimizeLegibility;
        text-transform: none;
        word-wrap: normal;
        white-space: nowrap;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        &.md-size-2x {
          @include md-icon-size($icon-size * 2);
        }

        &.md-size-3x {
          @include md-icon-size($icon-size * 3);
        }

        &.md-size-4x {
          @include md-icon-size($icon-size * 4);
        }

        &.md-size-5x {
          @include md-icon-size($icon-size * 5);
        }
      }
    }

    &:not([disabled]) {
      &:hover{
        background-color: rgba(#999, .2);
      }
    }

    &[disabled] {
      > .md-rating-bar-icons {
        > .md-icon {
          cursor: default;
        }
      }
    }
  }
</style>
