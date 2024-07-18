# 🌱 Web AgroSync 🌍

# UI Screenshot 📱
![1](https://github.com/user-attachments/assets/3be1b744-c5f6-4a5f-842e-e2108d78af59)
![2](https://github.com/user-attachments/assets/4a08aed9-b0e0-48e7-b4c2-1b45f682d00f)
![3](https://github.com/user-attachments/assets/0532dee8-1207-4675-9e5d-f657702d560f)
![4](https://github.com/user-attachments/assets/a2fc2ed1-5e61-4fd7-b399-b6dfd30b8cfd)
![5](https://github.com/user-attachments/assets/13e71064-1074-4075-b971-8ff972ade2d8)
![6](https://github.com/user-attachments/assets/bb64d99f-f814-46fe-9402-17bf057c450c)
![7](https://github.com/user-attachments/assets/571b9e8e-2f08-486e-91e7-9328a985e74b)
![8](https://github.com/user-attachments/assets/217958ae-20db-40c1-b6da-77f8333126b0)


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
