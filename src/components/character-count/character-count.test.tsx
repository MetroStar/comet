import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Form, FormGroup, Label, TextInput } from "../..";
import { CharacterCount, CharacterCountContainer } from "./character-count";

describe("Character Count", () => {
  const renderCharacterCountInputSample = () =>
    render(
      <Form>
        <CharacterCountContainer>
          <FormGroup>
            <Label htmlFor="with-hint-input">Text input</Label>
            <span id="with-hint-input-hint" className="usa-hint">
              This is an input with a character counter.
            </span>
            <TextInput
              id="with-hint-input"
              className="usa-character-count__field"
              maxLength={25}
              name="with-hint-input"
              aria-describedby="with-hint-input-info with-hint-input-hint"
            />
          </FormGroup>
          <CharacterCount id="with-hint-input-info">
            You can enter up to 25 characters
          </CharacterCount>
        </CharacterCountContainer>
      </Form>
    );

  it("should render successfully", () => {
    const { baseElement } = renderCharacterCountInputSample();
    expect(baseElement).toBeTruthy();
  });

  it("should update character count when typing into input", async () => {
    const { baseElement } = renderCharacterCountInputSample();
    const characterCountElement = baseElement.querySelector(
      ".usa-character-count__message"
    ) as HTMLSpanElement;
    const input = baseElement.querySelector("input") as HTMLInputElement;

    expect(characterCountElement.textContent).toBe(
      "You can enter up to 25 characters"
    );
    await userEvent.type(input, "Hello World"); // 11 characters
    userEvent.clear(input);
    expect(characterCountElement.textContent).toBe(
      "You can enter up to 25 characters"
    );
  });
});
