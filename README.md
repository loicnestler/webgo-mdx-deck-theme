# webgo-mdx-deck-theme
> A simple [webgo]()-branded theme for [mdx-deck](https://github.com/jxnblk/mdx-deck/).

## Setup

### 1. Install the package
```bash
npm install https://github.com/loicnestler/webgo-mdx-deck-theme.git
```

### 2. Initialize
```bash
npm init && npm i mdx-deck
```

### 3. Add to your `package.json`
```json
{
   [...]
   "scripts": {
		"start": "mdx-deck deck.mdx"
	}
}
```

### 4. Create `deck.mdx`
Create `deck.mdx` in your projects root directory and start writing content!

#### 4.1 Add the `webgo` theme
Add this line to your`deck.mdx` file:
```javascript
export {webgo as theme} from 'webgo-mdx-deck-theme'
```

### 5. Paste in some content
````mdx
export {webgo as theme} from 'webgo-mdx-deck-theme'

import Cover from 'webgo-mdx-deck-theme/cover'

<Cover>
   <!-- The Cover layout is used to hide the webgo decoration on a specific slide -->
   # This is the title of my deck
</Cover>

---

# About Me

---

# The end
````

### 6. Start the dev server
```bash
npm start
```