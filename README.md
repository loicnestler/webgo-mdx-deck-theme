# webgo-mdx-deck-theme
> A simple [webgo]()-branded theme for [mdx-deck](https://github.com/jxnblk/mdx-deck/).

## Setup

### 1. Clone this repository
```bash
git clone https://github.com/loicnestler/webgo-mdx-deck-theme.git deck && cd deck && npm i
```

### 2. Create `deck.mdx`
Create `deck.mdx` in your projects root directory.

#### 2.1 Add the `webgo` theme
Add this line to your`deck.mdx` file:
```javascript
export {webgo as theme} from './theme/'
```

### 3. Paste in some content
````mdx

import Cover from './theme/cover'

<!-- The Cover layout is used to hide the webgo decoration on a specific slide -->

<Cover>
   # This is the title of my deck
</Cover>

---

# About Me

---

# The end
````

### 4. Start the dev server
```bash
npm start
```