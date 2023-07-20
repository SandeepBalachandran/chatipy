

import React from 'react';
import { Configuration, OpenAIApi } from 'openai';
import { Button, TextField } from '../../helpers/MatImports';
import { v4 as uuidv4 } from 'uuid';
import useStore from '../../store/store';

const MoodToColor = (props: Props) => {
  const currentToken = useStore((state: any) => state.token);
  const configuration = new Configuration({
    apiKey: currentToken ? currentToken : '',
  });
  const openai = new OpenAIApi(configuration);
  const [prompt, setPrompt] = React.useState('');
  const [apiResponse, setApiResponse] = React.useState<any>('');
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result: any = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: `You will be provided with a description of a mood, and your task is to generate the CSS code for a color that matches it. 
              Write your output in json with a single key called "css_code"`,
          },
          { role: 'user', content: prompt },
        ],
        temperature: 0.5,
        max_tokens: 4000,
      });
      console.log(result.data.choices[0].message.content);
      setApiResponse(JSON.parse(result.data.choices[0].message.content));
      console.log(apiResponse)
      console.log(apiResponse.css_code);
    } catch (e) {
      setApiResponse('Something is going wrong, Please try again.');
    }
    setLoading(false);
  };

  return (
    <React.Fragment>
      <div className="flex flex-col justify-center">
        <div className="flex flex-col justify-center w-full m-2 ">
          <form onSubmit={handleSubmit} className="flex justify-center">
            <div className="flex flex-col gap-10 w-">
              <TextField
                id="outlined-multiline-flexible"
                label="Share Your text"
                multiline
                rows={4}
                value={prompt}
                className="w-96"
                placeholder="Turn a text description into a color."
                onChange={e => setPrompt(e.target.value)}
              />
              <Button
                variant="contained"
                disabled={loading || prompt.length === 0}
                type="submit"
              >
                {' '}
                {loading ? 'Scannning text...' : 'Turn'}
              </Button>
            </div>
          </form>
          {Boolean(apiResponse.length) && (
            <div className="flex justify-center p-4 m-2 mt-5 overflow-auto border-2 rounded-md max-h-96">
              <React.Fragment>
                <div
                  className=""
                  style={{ backgroundColor: apiResponse.css_code }}
                ></div>
              </React.Fragment>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default MoodToColor;







