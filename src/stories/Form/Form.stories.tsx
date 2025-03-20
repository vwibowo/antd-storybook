
import type { Meta, StoryObj } from '@storybook/react';
import { Form } from 'antd';
import DemoValidateTriggerComp from "./validate-trigger";
import DemoValidateScrollToFieldComp from "./validate-scroll-to-field";
import DemoComplexFormControlComp from "./complex-form-control";
import DemoSizeComp from "./size";
import DemoControlHooksComp from "./control-hooks";
import DemoDynamicRuleComp from "./dynamic-rule";
import DemoLayoutMultipleComp from "./layout-multiple";
import DemoWarningOnlyComp from "./warning-only";
import DemoLoginComp from "./login";
import DemoGetValuePropsNormalizeComp from "./getValueProps-normalize";
import DemoDynamicFormItemsComp from "./dynamic-form-items";
import DemoLayoutCanWrapComp from "./layout-can-wrap";
import DemoDynamicFormItemsNoStyleComp from "./dynamic-form-items-no-style";
import DemoVariantComp from "./variant";
import DemoRegisterComp from "./register";
import DemoDynamicFormItemsComplexComp from "./dynamic-form-items-complex";
import DemoValidateOtherComp from "./validate-other";
import DemoCustomFeedbackIconsComp from "./custom-feedback-icons";
import DemoInlineLoginComp from "./inline-login";
import DemoFormItemPathComp from "./form-item-path";
import DemoWithoutFormCreateComp from "./without-form-create";
import DemoValidateStaticComp from "./validate-static";
import DemoValidateOnlyComp from "./validate-only";
import DemoFormDependenciesComp from "./form-dependencies";
import DemoAdvancedSearchComp from "./advanced-search";
import DemoNestMessagesComp from "./nest-messages";
import DemoRefItemComp from "./ref-item";
import DemoLayoutComp from "./layout";
import DemoDisabledComp from "./disabled";
import DemoBasicComp from "./basic";
import DemoFormInModalComp from "./form-in-modal";
import DemoRequiredMarkComp from "./required-mark";
import DemoFormContextComp from "./form-context";
import DemoUseWatchComp from "./useWatch";
import DemoGlobalStateComp from "./global-state";
import DemoTimeRelatedControlsComp from "./time-related-controls";
import DemoCustomizedFormControlsComp from "./customized-form-controls";
import DemoDynamicFormItemComp from "./dynamic-form-item";

const meta = {
  title: 'Base/Form',
  component: Form,
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<any>;


export const Demo_validateTrigger: Story = {
  render: (p:any) => <DemoValidateTriggerComp {...p} />
};

export const Demo_validateScrollToField: Story = {
  render: (p:any) => <DemoValidateScrollToFieldComp {...p} />
};

export const Demo_complexFormControl: Story = {
  render: (p:any) => <DemoComplexFormControlComp {...p} />
};

export const Demo_size: Story = {
  render: (p:any) => <DemoSizeComp {...p} />
};

export const Demo_controlHooks: Story = {
  render: (p:any) => <DemoControlHooksComp {...p} />
};

export const Demo_dynamicRule: Story = {
  render: (p:any) => <DemoDynamicRuleComp {...p} />
};

export const Demo_layoutMultiple: Story = {
  render: (p:any) => <DemoLayoutMultipleComp {...p} />
};

export const Demo_warningOnly: Story = {
  render: (p:any) => <DemoWarningOnlyComp {...p} />
};

export const Demo_login: Story = {
  render: (p:any) => <DemoLoginComp {...p} />
};

export const Demo_getValuePropsNormalize: Story = {
  render: (p:any) => <DemoGetValuePropsNormalizeComp {...p} />
};

export const Demo_dynamicFormItems: Story = {
  render: (p:any) => <DemoDynamicFormItemsComp {...p} />
};

export const Demo_layoutCanWrap: Story = {
  render: (p:any) => <DemoLayoutCanWrapComp {...p} />
};

export const Demo_dynamicFormItemsNoStyle: Story = {
  render: (p:any) => <DemoDynamicFormItemsNoStyleComp {...p} />
};

export const Demo_variant: Story = {
  render: (p:any) => <DemoVariantComp {...p} />
};

export const Demo_register: Story = {
  render: (p:any) => <DemoRegisterComp {...p} />
};

export const Demo_dynamicFormItemsComplex: Story = {
  render: (p:any) => <DemoDynamicFormItemsComplexComp {...p} />
};

export const Demo_validateOther: Story = {
  render: (p:any) => <DemoValidateOtherComp {...p} />
};

export const Demo_customFeedbackIcons: Story = {
  render: (p:any) => <DemoCustomFeedbackIconsComp {...p} />
};

export const Demo_inlineLogin: Story = {
  render: (p:any) => <DemoInlineLoginComp {...p} />
};

export const Demo_formItemPath: Story = {
  render: (p:any) => <DemoFormItemPathComp {...p} />
};

export const Demo_withoutFormCreate: Story = {
  render: (p:any) => <DemoWithoutFormCreateComp {...p} />
};

export const Demo_validateStatic: Story = {
  render: (p:any) => <DemoValidateStaticComp {...p} />
};

export const Demo_validateOnly: Story = {
  render: (p:any) => <DemoValidateOnlyComp {...p} />
};

export const Demo_formDependencies: Story = {
  render: (p:any) => <DemoFormDependenciesComp {...p} />
};

export const Demo_advancedSearch: Story = {
  render: (p:any) => <DemoAdvancedSearchComp {...p} />
};

export const Demo_nestMessages: Story = {
  render: (p:any) => <DemoNestMessagesComp {...p} />
};

export const Demo_refItem: Story = {
  render: (p:any) => <DemoRefItemComp {...p} />
};

export const Demo_layout: Story = {
  render: (p:any) => <DemoLayoutComp {...p} />
};

export const Demo_disabled: Story = {
  render: (p:any) => <DemoDisabledComp {...p} />
};

export const Demo_basic: Story = {
  render: (p:any) => <DemoBasicComp {...p} />
};

export const Demo_formInModal: Story = {
  render: (p:any) => <DemoFormInModalComp {...p} />
};

export const Demo_requiredMark: Story = {
  render: (p:any) => <DemoRequiredMarkComp {...p} />
};

export const Demo_formContext: Story = {
  render: (p:any) => <DemoFormContextComp {...p} />
};

export const Demo_useWatch: Story = {
  render: (p:any) => <DemoUseWatchComp {...p} />
};

export const Demo_globalState: Story = {
  render: (p:any) => <DemoGlobalStateComp {...p} />
};

export const Demo_timeRelatedControls: Story = {
  render: (p:any) => <DemoTimeRelatedControlsComp {...p} />
};

export const Demo_customizedFormControls: Story = {
  render: (p:any) => <DemoCustomizedFormControlsComp {...p} />
};

export const Demo_dynamicFormItem: Story = {
  render: (p:any) => <DemoDynamicFormItemComp {...p} />
};
