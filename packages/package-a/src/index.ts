import packageB from '@xv-publish-test/changeset-test-b';
import packageC from '@xv-publish-test/changeset-test-c';

export const exec01 = () => {
  console.log('fix');
};

export const exec02 = () => {
  console.log('fix');
};

function templateEg(): void {
  console.log('Lib exempli.');
  console.log('Lib exempli.');
  console.log(packageB);
  console.log(packageC);
}

export default templateEg;
