import { createRenderer } from "@testing-library/svelte";
import { mount } from "@testing-library/dom";
import Page from "./page.svelte";

describe("Select Component", () => {
  let renderer;
  let container;

  beforeEach(() => {
    renderer = createRenderer();
    container = mount(Page);
  });

  afterEach(() => {
    renderer.unmount();
  });

  it("should render the select element with options", () => {
    const selectElement = container.querySelector("select");
    expect(selectElement).toBeInTheDocument();
    expect(selectElement.options.length).toBeGreaterThan(0);
  });

  it("should change the selected value when an option is clicked", () => {
    const firstOption = container.querySelector("select option:first-child");
    firstOption.dispatchEvent(new Event("click"));

    const selectedOption = container.querySelector("select option:selected");
    expect(selectedOption.textContent).toBe("Opción 1");
  });
});
