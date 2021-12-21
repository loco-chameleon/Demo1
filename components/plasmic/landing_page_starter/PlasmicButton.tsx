// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ps3Hy1AERMbVLKcdR1pRJu
// Component: yz8JGM7N2jcB
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as pp from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import * as projectcss from "./plasmic_landing_page_starter.module.css"; // plasmic-import: ps3Hy1AERMbVLKcdR1pRJu/projectcss
import * as sty from "./PlasmicButton.module.css"; // plasmic-import: yz8JGM7N2jcB/css

import AppleIcon from "./icons/PlasmicIcon__Apple"; // plasmic-import: Dk4TBpsW2-IP/icon

export type PlasmicButton__VariantMembers = {
  showStartIcon: "showStartIcon";
  showEndIcon: "showEndIcon";
  color:
    | "green"
    | "indigo"
    | "blue"
    | "red"
    | "white"
    | "darkGray"
    | "link"
    | "navLink";
  iconOnly: "iconOnly";
  outline: "outline";
  bgDifference: "bgDifference";
  round: "round";
  large: "large";
  flat: "flat";
  extraSmallShadow: "extraSmallShadow";
  isDisabled: "isDisabled";
};

export type PlasmicButton__VariantsArgs = {
  showStartIcon?: SingleBooleanChoiceArg<"showStartIcon">;
  showEndIcon?: SingleBooleanChoiceArg<"showEndIcon">;
  color?: SingleChoiceArg<
    | "green"
    | "indigo"
    | "blue"
    | "red"
    | "white"
    | "darkGray"
    | "link"
    | "navLink"
  >;
  iconOnly?: SingleBooleanChoiceArg<"iconOnly">;
  outline?: SingleBooleanChoiceArg<"outline">;
  bgDifference?: SingleBooleanChoiceArg<"bgDifference">;
  round?: SingleBooleanChoiceArg<"round">;
  large?: SingleBooleanChoiceArg<"large">;
  flat?: SingleBooleanChoiceArg<"flat">;
  extraSmallShadow?: SingleBooleanChoiceArg<"extraSmallShadow">;
  isDisabled?: SingleBooleanChoiceArg<"isDisabled">;
};

type VariantPropType = keyof PlasmicButton__VariantsArgs;
export const PlasmicButton__VariantProps = new Array<VariantPropType>(
  "showStartIcon",
  "showEndIcon",
  "color",
  "iconOnly",
  "outline",
  "bgDifference",
  "round",
  "large",
  "flat",
  "extraSmallShadow",
  "isDisabled"
);

export type PlasmicButton__ArgsType = {
  startIcon?: React.ReactNode;
  children?: React.ReactNode;
  endIcon?: React.ReactNode;
  link?: string | PageHref;
};

type ArgPropType = keyof PlasmicButton__ArgsType;
export const PlasmicButton__ArgProps = new Array<ArgPropType>(
  "startIcon",
  "children",
  "endIcon",
  "link"
);

export type PlasmicButton__OverridesType = {
  root?: p.Flex<"button">;
};

export interface DefaultButtonProps extends pp.BaseButtonProps {
  color?: SingleChoiceArg<
    | "green"
    | "indigo"
    | "blue"
    | "red"
    | "white"
    | "darkGray"
    | "link"
    | "navLink"
  >;
  iconOnly?: SingleBooleanChoiceArg<"iconOnly">;
  outline?: SingleBooleanChoiceArg<"outline">;
  bgDifference?: SingleBooleanChoiceArg<"bgDifference">;
  round?: SingleBooleanChoiceArg<"round">;
  large?: SingleBooleanChoiceArg<"large">;
  flat?: SingleBooleanChoiceArg<"flat">;
  extraSmallShadow?: SingleBooleanChoiceArg<"extraSmallShadow">;
}

function PlasmicButton__RenderFunc(props: {
  variants: PlasmicButton__VariantsArgs;
  args: PlasmicButton__ArgsType;
  overrides: PlasmicButton__OverridesType;
  dataFetches?: PlasmicButton__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <p.Stack
      as={"button"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.button,
        projectcss.root_reset,
        sty.root,
        {
          [sty.root__bgDifference]: hasVariant(
            variants,
            "bgDifference",
            "bgDifference"
          ),
          [sty.root__color_blue]: hasVariant(variants, "color", "blue"),
          [sty.root__color_darkGray]: hasVariant(variants, "color", "darkGray"),
          [sty.root__color_green]: hasVariant(variants, "color", "green"),
          [sty.root__color_indigo]: hasVariant(variants, "color", "indigo"),
          [sty.root__color_navLink]: hasVariant(variants, "color", "navLink"),
          [sty.root__color_red]: hasVariant(variants, "color", "red"),
          [sty.root__color_white]: hasVariant(variants, "color", "white"),
          [sty.root__extraSmallShadow]: hasVariant(
            variants,
            "extraSmallShadow",
            "extraSmallShadow"
          ),
          [sty.root__flat]: hasVariant(variants, "flat", "flat"),
          [sty.root__iconOnly]: hasVariant(variants, "iconOnly", "iconOnly"),
          [sty.root__isDisabled]: hasVariant(
            variants,
            "isDisabled",
            "isDisabled"
          ),
          [sty.root__large]: hasVariant(variants, "large", "large"),
          [sty.root__outline]: hasVariant(variants, "outline", "outline"),
          [sty.root__round]: hasVariant(variants, "round", "round"),
          [sty.root__showEndIcon]: hasVariant(
            variants,
            "showEndIcon",
            "showEndIcon"
          ),
          [sty.root__showStartIcon]: hasVariant(
            variants,
            "showStartIcon",
            "showStartIcon"
          )
        }
      )}
    >
      {(
        hasVariant(variants, "iconOnly", "iconOnly")
          ? true
          : hasVariant(variants, "showStartIcon", "showStartIcon")
          ? true
          : false
      )
        ? p.renderPlasmicSlot({
            defaultContents: (
              <AppleIcon
                className={classNames(projectcss.all, sty.svg__sRWcF)}
                role={"img"}
              />
            ),

            value: args.startIcon,
            className: classNames(sty.slotTargetStartIcon, {
              [sty.slotTargetStartIcon__color_blue]: hasVariant(
                variants,
                "color",
                "blue"
              ),
              [sty.slotTargetStartIcon__color_darkGray]: hasVariant(
                variants,
                "color",
                "darkGray"
              ),
              [sty.slotTargetStartIcon__color_green]: hasVariant(
                variants,
                "color",
                "green"
              ),
              [sty.slotTargetStartIcon__color_indigo]: hasVariant(
                variants,
                "color",
                "indigo"
              ),
              [sty.slotTargetStartIcon__color_link]: hasVariant(
                variants,
                "color",
                "link"
              ),
              [sty.slotTargetStartIcon__color_navLink]: hasVariant(
                variants,
                "color",
                "navLink"
              ),
              [sty.slotTargetStartIcon__color_red]: hasVariant(
                variants,
                "color",
                "red"
              ),
              [sty.slotTargetStartIcon__color_white]: hasVariant(
                variants,
                "color",
                "white"
              ),
              [sty.slotTargetStartIcon__iconOnly]: hasVariant(
                variants,
                "iconOnly",
                "iconOnly"
              ),
              [sty.slotTargetStartIcon__isDisabled]: hasVariant(
                variants,
                "isDisabled",
                "isDisabled"
              ),
              [sty.slotTargetStartIcon__showEndIcon_color_green]:
                hasVariant(variants, "showEndIcon", "showEndIcon") &&
                hasVariant(variants, "color", "green"),
              [sty.slotTargetStartIcon__showStartIcon]: hasVariant(
                variants,
                "showStartIcon",
                "showStartIcon"
              ),
              [sty.slotTargetStartIcon__showStartIcon_showEndIcon_color_green]:
                hasVariant(variants, "showStartIcon", "showStartIcon") &&
                hasVariant(variants, "showEndIcon", "showEndIcon") &&
                hasVariant(variants, "color", "green")
            })
          })
        : null}
      {(hasVariant(variants, "iconOnly", "iconOnly") ? false : true)
        ? p.renderPlasmicSlot({
            defaultContents: "Label",
            value: args.children,
            className: classNames(sty.slotTargetChildren, {
              [sty.slotTargetChildren__bgDifference]: hasVariant(
                variants,
                "bgDifference",
                "bgDifference"
              ),
              [sty.slotTargetChildren__color_blue]: hasVariant(
                variants,
                "color",
                "blue"
              ),
              [sty.slotTargetChildren__color_darkGray]: hasVariant(
                variants,
                "color",
                "darkGray"
              ),
              [sty.slotTargetChildren__color_green]: hasVariant(
                variants,
                "color",
                "green"
              ),
              [sty.slotTargetChildren__color_indigo]: hasVariant(
                variants,
                "color",
                "indigo"
              ),
              [sty.slotTargetChildren__color_link]: hasVariant(
                variants,
                "color",
                "link"
              ),
              [sty.slotTargetChildren__color_navLink]: hasVariant(
                variants,
                "color",
                "navLink"
              ),
              [sty.slotTargetChildren__color_red]: hasVariant(
                variants,
                "color",
                "red"
              ),
              [sty.slotTargetChildren__color_white]: hasVariant(
                variants,
                "color",
                "white"
              ),
              [sty.slotTargetChildren__iconOnly]: hasVariant(
                variants,
                "iconOnly",
                "iconOnly"
              ),
              [sty.slotTargetChildren__isDisabled]: hasVariant(
                variants,
                "isDisabled",
                "isDisabled"
              ),
              [sty.slotTargetChildren__large]: hasVariant(
                variants,
                "large",
                "large"
              ),
              [sty.slotTargetChildren__showEndIcon]: hasVariant(
                variants,
                "showEndIcon",
                "showEndIcon"
              ),
              [sty.slotTargetChildren__showStartIcon]: hasVariant(
                variants,
                "showStartIcon",
                "showStartIcon"
              )
            })
          })
        : null}
      {(
        hasVariant(variants, "showEndIcon", "showEndIcon")
          ? true
          : hasVariant(variants, "iconOnly", "iconOnly")
          ? false
          : hasVariant(variants, "showStartIcon", "showStartIcon")
          ? false
          : false
      )
        ? p.renderPlasmicSlot({
            defaultContents: (
              <AppleIcon
                className={classNames(projectcss.all, sty.svg__nh9WK)}
                role={"img"}
              />
            ),

            value: args.endIcon,
            className: classNames(sty.slotTargetEndIcon, {
              [sty.slotTargetEndIcon__color_blue]: hasVariant(
                variants,
                "color",
                "blue"
              ),
              [sty.slotTargetEndIcon__color_darkGray]: hasVariant(
                variants,
                "color",
                "darkGray"
              ),
              [sty.slotTargetEndIcon__color_green]: hasVariant(
                variants,
                "color",
                "green"
              ),
              [sty.slotTargetEndIcon__color_indigo]: hasVariant(
                variants,
                "color",
                "indigo"
              ),
              [sty.slotTargetEndIcon__color_link]: hasVariant(
                variants,
                "color",
                "link"
              ),
              [sty.slotTargetEndIcon__color_navLink]: hasVariant(
                variants,
                "color",
                "navLink"
              ),
              [sty.slotTargetEndIcon__color_red]: hasVariant(
                variants,
                "color",
                "red"
              ),
              [sty.slotTargetEndIcon__color_white]: hasVariant(
                variants,
                "color",
                "white"
              ),
              [sty.slotTargetEndIcon__iconOnly]: hasVariant(
                variants,
                "iconOnly",
                "iconOnly"
              ),
              [sty.slotTargetEndIcon__isDisabled]: hasVariant(
                variants,
                "isDisabled",
                "isDisabled"
              ),
              [sty.slotTargetEndIcon__showEndIcon]: hasVariant(
                variants,
                "showEndIcon",
                "showEndIcon"
              ),
              [sty.slotTargetEndIcon__showStartIcon]: hasVariant(
                variants,
                "showStartIcon",
                "showStartIcon"
              )
            })
          })
        : null}
    </p.Stack>
  ) as React.ReactElement | null;
}

function useBehavior<P extends pp.BaseButtonProps>(
  props: P,
  ref: pp.ButtonRef
) {
  const b = pp.useButton<P, typeof PlasmicButton>(
    PlasmicButton,
    props,
    {
      showStartIconVariant: {
        group: "showStartIcon",
        variant: "showStartIcon"
      },
      showEndIconVariant: { group: "showEndIcon", variant: "showEndIcon" },
      isDisabledVariant: { group: "isDisabled", variant: "isDisabled" },
      contentSlot: "children",
      startIconSlot: "startIcon",
      endIconSlot: "endIcon",
      root: "root"
    },

    ref
  );

  if (b.plasmicProps.overrides.root.as === "a") {
    b.plasmicProps.overrides.root.as = p.PlasmicLink;
    b.plasmicProps.overrides.root.props.component = Link;
    b.plasmicProps.overrides.root.props.platform = "nextjs";
  }
  return b;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "button";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicButton__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicButton__VariantsArgs;
    args?: PlasmicButton__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicButton__Fetches;
  } & Omit<PlasmicButton__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicButton__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicButton__ArgProps,
      internalVariantPropNames: PlasmicButton__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicButton__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicButton";
  } else {
    func.displayName = `PlasmicButton.${nodeName}`;
  }
  return func;
}

export const PlasmicButton = Object.assign(
  // Top-level PlasmicButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicButton
    internalVariantProps: PlasmicButton__VariantProps,
    internalArgProps: PlasmicButton__ArgProps,

    useBehavior
  }
);

export default PlasmicButton;
/* prettier-ignore-end */
