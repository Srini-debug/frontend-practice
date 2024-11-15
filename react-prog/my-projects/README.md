** Counter-app: ** 

<!-- Container (div with className="flex flex-col items-center font-sans")

	1.	flex: Sets the container to use Flexbox for layout, enabling flexible alignment of child elements.
	2.	flex-col: Arranges Flexbox children vertically in a column.
	3.	items-center: Centers child elements horizontally along the cross-axis (in this case, horizontally).
	4.	font-sans: Applies a sans-serif font style for a cleaner, modern look.

Title (div with className="text-xl font-semibold mb-4")

	1.	text-xl: Sets the font size to “extra-large,” making the text stand out.
	2.	font-semibold: Makes the text weight “semibold,” slightly bolder than normal for emphasis.
	3.	mb-4: Adds margin to the bottom, spacing the title from the buttons. The 4 represents a unit of 1rem or 16px (depending on your root font size).

Button Styling (button with className="bg-green-500 hover:bg-green-600 text-white text-2xl px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400" for increase button, similar for decrease button)

Base Button Classes

	1.	bg-green-500 or bg-red-500: Sets the background color of the button. Tailwind uses a color scale where 500 is a mid-level shade. Here, green-500 is a medium green, and red-500 is a medium red.
	2.	hover:bg-green-600 or hover:bg-red-600: Changes the button’s background color when hovered, making it a slightly darker shade (600 on the color scale) for a visual effect.
	3.	text-white: Sets the button text color to white for contrast against the colored background.
	4.	text-2xl: Increases the font size to “2 extra-large” for better visibility and emphasis.
	5.	px-4 py-2: Adds padding inside the button. px-4 is horizontal padding (left and right) and py-2 is vertical padding (top and bottom). 4 and 2 represent spacing units (typically 1rem and 0.5rem respectively).
	6.	rounded-md: Rounds the button corners to a medium degree, giving it a smoother, modern look.
	7.	focus:outline-none: Removes the default outline styling on focus, to use custom focus styles instead.
	8.	focus:ring-2 focus:ring-green-400 or focus:ring-red-400: Adds a focus ring (a border around the button) when focused, with a width of 2px and a color from the Tailwind color scale. This aids accessibility by providing a clear visual indicator when the button is focused.

Count Display (div with className="text-lg mt-4")

	1.	text-lg: Sets the font size to “large,” making the count text slightly bigger for readability.
	2.	mt-4: Adds margin to the top of the element to space it from the buttons above. -->