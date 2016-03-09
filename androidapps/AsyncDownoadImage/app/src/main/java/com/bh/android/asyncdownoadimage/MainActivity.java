package com.bh.android.asyncdownoadimage;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.os.AsyncTask;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.net.URL;

//----------------
//Load image async
//----------------

public class MainActivity extends AppCompatActivity {

    // Reference: http://developer.android.com/intl/zh-tw/reference/android/os/AsyncTask.html#Usage

    private Button mButton = null;
    private ImageView logo = null;

    private String imageUrl = "https://lh5.googleusercontent.com/-XK2W-5kJlPw/AAAAAAAAAAI/AAAAAAAAAB4/Jmzft9xeqBI/photo.jpg";

    private final boolean DBG = true;
    private final String TAG = "AsyncDownloadImage";

    @Override
    protected void onCreate(Bundle savedInstanceState) {

        if(DBG) Log.d(TAG, "+++ onCreate +++");

        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        logo = (ImageView) findViewById(R.id.logo);
        mButton = (Button) findViewById(R.id.download);
        mButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                new inAsyncTask().execute(imageUrl);
            }
        });
    }

    @Override
    protected void onResume() {
        if(DBG) Log.d(TAG, "+++ onResume +++");
        super.onResume();
    }

    private class inAsyncTask extends AsyncTask<String, Integer, Bitmap> {
        protected Bitmap doInBackground(String... urls) {

            Bitmap bmp = null;
            try {
                URL url = new URL(urls[0]);
                byte[] bytes = downloadBytes(url);
                bmp = convertToBitmap(bytes);

            } catch (MalformedURLException e) {
                e.printStackTrace();
            } catch (IOException e) {
                e.printStackTrace();
            }

            return bmp;
        }

        protected void onProgressUpdate(Integer... progress) {
            //setProgressPercent(progress[0]);
        }

        protected void onPostExecute(Bitmap bitmp) {

            if (bitmp != null) {
                logo.setImageBitmap(bitmp);
            }
        }
    }


    private static byte[] downloadBytes(URL url) {

        InputStream in = null;
        try {
            in = url.openConnection().getInputStream();
            ByteArrayOutputStream out = new ByteArrayOutputStream();
            byte[] buffer = new byte[1024];
            while (true) {
                int r = in.read(buffer);
                if (r == -1) break;
                out.write(buffer, 0, r);
            }

            byte[] ret = out.toByteArray();
            return ret;
        } catch (IOException e) {
            e.printStackTrace();
        }

        return null;
    }

    ; // request synchronously an image from our servers
    private static Bitmap convertToBitmap(byte[] bytes) {
        Bitmap bitmap = BitmapFactory.decodeByteArray(bytes, 0, bytes.length);
        return bitmap;
    }
}
