import { render } from "@testing-library/vue";
import Home from "@/views/Home.vue";

test("Render Home Page", () => {
  const { getByText } = render(Home);
});
