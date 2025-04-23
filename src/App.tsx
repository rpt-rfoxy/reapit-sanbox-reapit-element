import { BrowserRouter, Route, Router, Routes } from "react-router";
import { Accordion } from "./accordion";
import { LabelText } from "./label-text";
import { ElFeature, elForm, elIcon } from "./styles";
import { Tabs } from "./tabs";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { TextInput } from "./text-input";
import { FormControl } from "./form-control";

interface FormValues {
  text_1: string
  text_2: string
  text_3: string
  date_1: string
}
const App = () => {
  const [data, setData] = useState<string>("")
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>()

  const onSubmit = (data: FormValues) => {
    console.log('Form Submitted:', data)
  }
  return (
    <div>
      <div><h1>Input </h1></div>
      <form onSubmit={handleSubmit(onSubmit)} className={elForm}>
        <FormControl >
          <FormControl.Label>Example Title</FormControl.Label>
          <FormControl.Input>
            <TextInput
              {...register("date_1", { required: "Error Display Here" })}
              {...{
                type: 'date',
                placeholder: 'A Placeholder',
                size: 'small',
                isError: true,

              }}
            />
          </FormControl.Input>
          <FormControl.ErrorText>Error Display Here</FormControl.ErrorText>
          <FormControl.HelperText>Helper Display Here</FormControl.HelperText>
        </FormControl>
        <FormControl >
          <FormControl.Label>Example Title</FormControl.Label>
          <FormControl.Input>
            <TextInput
              {...register("date_1", { required: "Error Display Here" })}
              {...{
                type: 'date',
                placeholder: 'A Placeholder',
                size: 'medium',
                isError: !!errors?.date_1?.message,

              }}
            />
          </FormControl.Input>
          <FormControl.ErrorText>Error Display Here</FormControl.ErrorText>
          <FormControl.HelperText>Helper Display Here</FormControl.HelperText>
        </FormControl>
        <FormControl >
          <FormControl.Label>Example Title</FormControl.Label>
          <FormControl.Input>
            <TextInput
              {...register("date_1", { required: "Error Display Here" })}
              {...{
                type: 'date',
                placeholder: 'A Placeholder',
                size: 'large',
                isError: !!errors?.date_1?.message,

              }}
            />
          </FormControl.Input>
          <FormControl.ErrorText>Error Display Here</FormControl.ErrorText>
          <FormControl.HelperText>Helper Display Here</FormControl.HelperText>
        </FormControl>

        <FormControl>
          <FormControl.Label>Example Title</FormControl.Label>
          <FormControl.Input>
            <TextInput
              {...register("text_1", { required: "Error Display Here" })}
              {...{
                type: 'text',
                placeholder: 'A Placeholder',
                size: 'small',
                isError: !!errors?.text_1?.message,
                isRequired: true,
                prefix: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.0509 2.29843C20.4632 1.9354 19.7297 1.90138 19.1109 2.20843L12.7609 5.37843H7.00088C4.49862 5.37819 2.38147 7.22774 2.04563 9.70737C1.7098 12.187 3.2587 14.5331 5.67088 15.1984L4.27088 19.3784C4.12166 19.8362 4.19967 20.3376 4.48088 20.7284C4.75434 21.1292 5.20578 21.3717 5.69088 21.3786H8.69088C9.3306 21.3871 9.90344 20.9836 10.1109 20.3784L11.7709 15.3784H12.7709L19.1209 18.5484C19.3974 18.6862 19.702 18.7581 20.0109 18.7584C21.1155 18.7584 22.0109 17.863 22.0109 16.7584V3.99843C22.008 3.30346 21.6445 2.65981 21.0509 2.29843ZM4.00088 10.3784C4.00088 8.72158 5.34403 7.37843 7.00088 7.37843H12.0009V13.3784H7.00088C5.34403 13.3784 4.00088 12.0353 4.00088 10.3784ZM8.28088 19.3784H6.39088L7.72088 15.3784H9.61088L8.28088 19.3784ZM14.0009 13.7584V6.99843L20.0009 3.99843V16.7584L14.0009 13.7584Z" fill="currentColor" />
                </svg>,

                suffix: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 11H13V4C13 3.44772 12.5523 3 12 3C11.4477 3 11 3.44772 11 4V11H4C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13H11V20C11 20.5523 11.4477 21 12 21C12.5523 21 13 20.5523 13 20V13H20C20.5523 13 21 12.5523 21 12C21 11.4477 20.5523 11 20 11Z" fill="currentColor" />
                </svg>,

                // loadingIcon: <svg className={elIcon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                //   <path d="M15.3333 10C15.3295 9.98243 15.3295 9.96425 15.3333 9.94668V9.85334C15.3302 9.84246 15.3302 9.8309 15.3333 9.82001L14 5.89334V4.00001C14 2.52725 12.8061 1.33334 11.3333 1.33334H4.66666C3.1939 1.33334 2 2.52725 2 4.00001V5.89334L0.699997 9.78668C0.703146 9.79757 0.703146 9.80912 0.699997 9.82001V9.91334C0.698566 9.94508 0.686868 9.97549 0.666664 10V12C0.666664 12.7364 1.26362 13.3333 2 13.3333V14C2 14.3682 2.29847 14.6667 2.66666 14.6667C3.03485 14.6667 3.33333 14.3682 3.33333 14V13.3333H12.6667V14C12.6667 14.3682 12.9651 14.6667 13.3333 14.6667C13.7015 14.6667 14 14.3682 14 14V13.3333C14.7364 13.3333 15.3333 12.7364 15.3333 12V10ZM3.14666 6.66668H12.8533L13.74 9.33334H2.26L3.14666 6.66668ZM3.33333 4.00001C3.33333 3.26363 3.93028 2.66668 4.66666 2.66668H11.3333C12.0697 2.66668 12.6667 3.26363 12.6667 4.00001V5.33334H3.33333V4.00001ZM2 12V10.6667H14V12H2Z" fill="#9FAEBC" />
                // </svg>,
                // isBusy: true


              }}
            />
          </FormControl.Input>
          <FormControl.ErrorText>Error Display Here</FormControl.ErrorText>
          <FormControl.HelperText>Helper Display Here</FormControl.HelperText>
        </FormControl>

        <FormControl >
          <FormControl.Label>Example Title</FormControl.Label>
          <FormControl.Input>
            <TextInput
              {...register("text_2", { required: "Error Display Here" })}
              {...{
                type: 'text',
                placeholder: 'A Placeholder',
                size: 'large',
                isError: !!errors?.text_1?.message,
                disabled: true,
              }}
            />
          </FormControl.Input>
          <FormControl.ErrorText>Error Display Here</FormControl.ErrorText>
          <FormControl.HelperText>Helper Display Here</FormControl.HelperText>
        </FormControl>

        <FormControl >
          <FormControl.Label>Example Title</FormControl.Label>
          <FormControl.Input>
            <TextInput
              {...register("text_3", { required: "Error Display Here" })}
              {...{
                type: 'text',
                placeholder: 'A Placeholder',
                size: 'medium',
                isError: !!errors?.text_1?.message,
                // disabled: true,
                readOnly: true
              }}
            />
          </FormControl.Input>
          <FormControl.ErrorText>Error Display Here</FormControl.ErrorText>
          <FormControl.HelperText>Helper Display Here</FormControl.HelperText>
        </FormControl>
        <button type="submit">Submit</button>
      </form>

      <div><h1>Accordion </h1></div>
      <Accordion.Group>
        <Accordion>
          <Accordion.Header>
            <LabelText variant="strong">Lorem ipsum dolor sit amet</LabelText>
            <Accordion.Legend>
              <LabelText >3</LabelText>
            </Accordion.Legend>
          </Accordion.Header>
          <Accordion.Body>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </Accordion.Body>
        </Accordion>
        <Accordion>
          <Accordion.Header>
            <LabelText variant="strong">Lorem ipsum dolor sit amet</LabelText>
            <Accordion.Legend>
              <ElFeature>
                <svg className={elIcon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M15.3333 10C15.3295 9.98243 15.3295 9.96425 15.3333 9.94668V9.85334C15.3302 9.84246 15.3302 9.8309 15.3333 9.82001L14 5.89334V4.00001C14 2.52725 12.8061 1.33334 11.3333 1.33334H4.66666C3.1939 1.33334 2 2.52725 2 4.00001V5.89334L0.699997 9.78668C0.703146 9.79757 0.703146 9.80912 0.699997 9.82001V9.91334C0.698566 9.94508 0.686868 9.97549 0.666664 10V12C0.666664 12.7364 1.26362 13.3333 2 13.3333V14C2 14.3682 2.29847 14.6667 2.66666 14.6667C3.03485 14.6667 3.33333 14.3682 3.33333 14V13.3333H12.6667V14C12.6667 14.3682 12.9651 14.6667 13.3333 14.6667C13.7015 14.6667 14 14.3682 14 14V13.3333C14.7364 13.3333 15.3333 12.7364 15.3333 12V10ZM3.14666 6.66668H12.8533L13.74 9.33334H2.26L3.14666 6.66668ZM3.33333 4.00001C3.33333 3.26363 3.93028 2.66668 4.66666 2.66668H11.3333C12.0697 2.66668 12.6667 3.26363 12.6667 4.00001V5.33334H3.33333V4.00001ZM2 12V10.6667H14V12H2Z" fill="#9FAEBC" />
                </svg>
                <LabelText >3</LabelText>
              </ElFeature>
              <ElFeature>
                <svg className={elIcon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M15.3333 10C15.3295 9.98243 15.3295 9.96425 15.3333 9.94668V9.85334C15.3302 9.84246 15.3302 9.8309 15.3333 9.82001L14 5.89334V4.00001C14 2.52725 12.8061 1.33334 11.3333 1.33334H4.66666C3.1939 1.33334 2 2.52725 2 4.00001V5.89334L0.699997 9.78668C0.703146 9.79757 0.703146 9.80912 0.699997 9.82001V9.91334C0.698566 9.94508 0.686868 9.97549 0.666664 10V12C0.666664 12.7364 1.26362 13.3333 2 13.3333V14C2 14.3682 2.29847 14.6667 2.66666 14.6667C3.03485 14.6667 3.33333 14.3682 3.33333 14V13.3333H12.6667V14C12.6667 14.3682 12.9651 14.6667 13.3333 14.6667C13.7015 14.6667 14 14.3682 14 14V13.3333C14.7364 13.3333 15.3333 12.7364 15.3333 12V10ZM3.14666 6.66668H12.8533L13.74 9.33334H2.26L3.14666 6.66668ZM3.33333 4.00001C3.33333 3.26363 3.93028 2.66668 4.66666 2.66668H11.3333C12.0697 2.66668 12.6667 3.26363 12.6667 4.00001V5.33334H3.33333V4.00001ZM2 12V10.6667H14V12H2Z" fill="#9FAEBC" />
                </svg>
                <LabelText >2</LabelText>
              </ElFeature>
            </Accordion.Legend>

          </Accordion.Header>
          <Accordion.Body>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </Accordion.Body>
        </Accordion>
        <Accordion>
          <Accordion.Header>
            Lorem ipsum dolor sit amet
          </Accordion.Header>
          <Accordion.Body>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </Accordion.Body>
        </Accordion>
      </Accordion.Group>

      <div><h1>Tabs </h1></div>
      <BrowserRouter >
        <Tabs variant="default">
          <Tabs.Item href="tabpanel-1" >Default tab item 1</Tabs.Item>
          <Tabs.Item href="tabpanel-2" >Default tab item 2</Tabs.Item>
          <Tabs.Item href="tabpanel-3" isDisabled>Default tab item 3</Tabs.Item>
          <Tabs.Item href="tabpanel-4" >Default tab item 4</Tabs.Item>
          <Tabs.Item href="tabpanel-5" >Default tab item 5</Tabs.Item>
        </Tabs>
        <Routes>
          <Route path="tabpanel-1" element={<div>Content 1</div>} />
          <Route path="tabpanel-2" element={<div>Content 2</div>} />
          <Route path="tabpanel-3" element={<div>Content 3</div>} />
          <Route path="tabpanel-4" element={<div>Content 4</div>} />
          <Route path="tabpanel-5" element={<div>Content 5</div>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
};

export default App;
