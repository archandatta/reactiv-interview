# Configurable Mobile App Home Screen Renderer

App that renders a home screen with configurable sections. The home screen consists of a carousel, a text area, and a call-to-action button. The app three JSON configuration files that dynamically apply the configuration to the home screen.

## Run Project Locally

1. Install dependencies

   ```bash
   npm install
   ```

2. Start iOS

   ```bash
    npm run ios
   ```

3. Start Android

   ```bash
    npm run android
   ```

4. There are 3 configuration files which can be toggled through the Configurations tab.

## Approach

My approach to build a configurable app was to first understand the functional requirements, load in a JSON file which hold details for the components (carousel, text area and call to action) and render some components with the data. I used `expo` for this project as it becomming widely used and supports lots of native features out of the box. Fristly, I added the JSON configuration files to the code base and ensure it was accesibile at a gobal scope through context. I initialized with a global state from the start as I had it mind to be able to switch these configuration programatically at runtime. I passed the config data from the parent component (`index.tsx`) to keep the other components reusable.

After confirming the JSON file was loading in correctly, I proceeded to develop the components. First was the Carousel component (arguably the more complex component), I searched for exisiting libraries that support the functionality and performance we were after and found `react-native-reanimated-carousel` to be a suitable option with great community support. My approach to adding in this external library was to abstract it in a way that was clean and maintainable. I had to omit a few props (`'data' | 'mode' | 'modeConfig' | 'vertical'`) which were required to inherit the library's `TCarouselProps` props, added them to our props to be able to still access them. Doing this allows for the library component to be abstracted if it were to be swaped. Rendered the image from our config using `expo-image`, created a helper function `getImageAspectRatio` to be able to easily swtich the aspect ratio for the image for the various display options (landscape, portrait, square). There was weird rendering issue (zIndex issue) with the library version that I was using, so I had to upgrade to a pre-release version to fix it (`3.5.1 -> 4.0.0-canary.22`). With the image carousel component working as expected, moved on to the Text Area component.

The Text Area section was fairly straight forward. It was built by using standard `react-native` library component and I ensured that the data from the config was being passed through. Similarly, the Call to action component was straight forward, it was build with `Pressable` and `Text` components so achieve the UI were after. I initially did attempt to use the `Button` component from the `react-native` but it seems like it doesn't support styling the background color with wrapping it in a `View` (which would make the hit area smaller). Tested the button by visually ensuring the data was being pulled in and clicking the button took us to the desired URL.

After some styling and cleanup I thought the app looked the best with the Text Area  section at the top with the Image Carousel in the middle then the Call to Action. This allowed for the image section to be center and big.

Lastly, I added the toggle buttons to switch configurations from the app (purely for testing). Added some accessibility to the components and unit tests. As a bonus I also added a small button array to be able to switch the display of the image, of course it is purely visual!

## Considerations/Assumptions
### Image Carousel
- assumed a default size of `width = WINDOW_WIDTH; height = 450`
- some image might not fit the the carousel window sizing, this should be a future consideration but requries many more test cases.
- Added a linear gradient to the empty space around in the images to make it look nicer. Would've liked to use `react-native-image-colors` but it required `prebuild` which would've added complexity
- when writting the unit test for the Image Carousel, kept getting an error of `TypeError: _RNGestureHandlerModule.default.install is not a function`. I spent some time debugging it but was not able to narrow down the root of the issue so that test was skipped
- the component was built in a reusable manner but it does always required the `ImageCarouselType` for the `data`. Other parts of the app using this can modify all the other props such as width, height, scroll speed etc.
- for doing an end-to-end test of the Carousel I would've used Detox but it required lots of configuration which would added a lot of scope to this
### Text Area
- made some assumptions around the `fontSize` and `fontWeight` for the title and description. Of course these can be changed or added to our JSON configuration
### Call to Action
- assumed the link would take the user to their default browser instead of opening a Webview
- assumed the `fontSize`, `fontWeight`, `borderRadius` and `padding` for the label and button
